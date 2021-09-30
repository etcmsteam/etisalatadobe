! function(e, t) {  
        "use strict";
        return function() {
            var i;
            i = function() {
                var e = 500,
                    o = 350,
                    n = t.innerWidth / 2 - e / 2,
                    r = t.innerHeight / 2 - o / 2;
                return ["resizable,scrollbars,status", "height=" + o, "width=" + e, "left=" + n, "top=" + r].join()
            };
            function o(e, t, o) {
                var n;
                return function() {
                    var r ;
                    r = this;
                    /* eslint-disable */
                        i = arguments;
                    /* eslint-disable */
                        a = function() {
                            n = null, o || e.apply(r, i)
                        };
                        c = o && !n;
                    clearTimeout(n), n = setTimeout(a, t), c && e.apply(r, i)
                }
            }
            var n = t.location.href,
                r = document.getElementById("linkText");
            r.value = n, e(".copyLink").click(function() {
                r.select(), document.execCommand("copy"), e(".form-share").addClass("copied")
            });
           
            e(".shareFacebookk").click(function(e) {
                e.preventDefault(), a("ShareOnFb", "Hey everyone, come & see this link!", "https://www.facebook.com/sharer/sharer.php?u=", e.target)
            }), e(".shareLinkedIn").click(function(e) {
                e.preventDefault(), a("ShareOnLinkedIn", "Hey everyone, come & see this link!", "http://www.linkedin.com/shareArticle?mini=true&url=", e.target)
            }), e(".shareTwitter").click(function(e) {
                e.preventDefault(), a("ShareOnTwitter", "Hey everyone, come & see this link!", "https://twitter.com/intent/tweet?url=", e.target)
            });
            var a = function(e, o, r, a) {
                var o = encodeURIComponent(o),
                    c = r + n + "&text=" + o;
                a.href = c;
                var s = t.open(c, e, i());
                s.opener = null
            };
            e(".blog-post-wrapper.video .img-cover").on("click", function() {
                var t = e(this).closest(".blog-post-wrapper.video").find(".mediaCtaVideo");
                t.modal().show()
            });
            var c;
            c = t.outerWidth > 1024 ? e(".action.share.fix").offset().top + 100 : t.outerWidth > 700 ? e(".action.share.fix").offset().top + 400 : e(".action.share.fix").offset().top + 500;
            var s = e(".quick-links-section").offset().top - 300,
                l = o(function() {
                    return t.scrollY > s ? (console.log("stop"), void e(".action.share.fix").removeClass("true")) : (c < t.scrollY && e(".action.share.fix").addClass("true"), void(c > t.scrollY && e(".action.share.fix").removeClass("true")))
                }, 250);
            e(t).scroll(l)
        }
    
}(define, window);
