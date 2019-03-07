var app = {

	loader: function() {

	   	if (window.parent.guardian!=undefined) {

			try {

				var authorIds = window.parent.guardian.config.page.authorIds

			  	var bylines = authorIds.split(',')

				if (bylines.length > 0) {

					app.render(bylines[0])

				}

			} catch(error) {

			  //console.error(error);

			}

	   	}

	},

	render: function(profile) {

	    let template = `<div id="contact-box">
					<div class='contactTitle'>Do you know more?</div>
					<div class='contactText'>If you want to send us information via email or encrypted messaging you can find contact details <a href="https://www.theguardian.com/{{profile}}" target="_blank">here</a>. Or, you can find details about our anonymous SecureDrop service <a href='https://www.theguardian.com/securedrop' target="_blank">here</a></div>
				</div>`;

	    let ltx = {

			profile: profile,

	    }

    	var html = app.mustache(template, ltx)

		document.getElementById("contact-app").innerHTML = html

	},

	mustache: function(l, a, m, c) {

	    function h(a, b) {
	        b = b.pop ? b : b.split(".");
	        a = a[b.shift()] || "";
	        return 0 in b ? h(a, b) : a
	    }
	    var k = app.mustache,
	        e = "";
	    a = Array.isArray(a) ? a : a ? [a] : [];
	    a = c ? 0 in a ? [] : [1] : a;
	    for (c = 0; c < a.length; c++) {
	        var d = "",
	            f = 0,
	            n, b = "object" == typeof a[c] ? a[c] : {},
	            b = Object.assign({}, m, b);
	        b[""] = {
	            "": a[c]
	        };
	        l.replace(/([\s\S]*?)({{((\/)|(\^)|#)(.*?)}}|$)/g, function(a, c, l, m, p, q, g) {
	            f ? d += f && !p || 1 < f ? a : c : (e += c.replace(/{{{(.*?)}}}|{{(!?)(&?)(>?)(.*?)}}/g, function(a, c, e, f, g, d) {
	                return c ? h(b, c) : f ? h(b, d) : g ? k(h(b, d), b) : e ? "" : (new Option(h(b, d))).innerHTML
	            }), n = q);
	            p ? --f || (g = h(b, g), e = /^f/.test(typeof g) ? e + g.call(b, d, function(a) {
	                return k(a, b)
	            }) : e + k(d, g, b, n), d = "") : ++f
	        })
	    }
	    return e
	}

}

app.loader()

