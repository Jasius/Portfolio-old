function thankingForHiring() {
    var thanksWindow = $("#thanksWindow");
    setTimeout(function () {
        thanksWindow.fadeIn("300", "linear");
    }, 100);
    setTimeout(function () {
        thanksWindow.fadeOut("1000", "swing");
    }, 3000);
}


function moveIndicator(e) {
    $indicator.css({left: e.position().left, width: e.width(), backgroundColor: e.css("color")})
}

$(document).ready(function () {
    !function () {
        $(".truncate").each(function () {
            var e = $(this).html();
            if (e.length > 600) {
                var t = e.substr(0, 600), n = e,
                    o = '<div class="truncate-text" style="display:block">' + t + '<span class="moreellipses">...&nbsp;&nbsp;<a href="" class="moreless more">more</a></span></span></div><div class="truncate-text" style="display:none">' + n + '<a href="" class="moreless less">Less</a></span></div>';
                $(this).html(o)
            }
        }), $(".moreless").click(function () {
            var e = $(this);
            return e.hasClass("less") ? (e.closest(".truncate-text").prev(".truncate-text").toggle(), e.closest(".truncate-text").slideToggle()) : (e.closest(".truncate-text").toggle(), e.closest(".truncate-text").next(".truncate-text").fadeToggle()), !1
        })
    }()
});
var w = $(window).width(), toggle = $("#toggle-menu"), menu = $("nav ul"), hasChild = $(".has-child"),
    dropdown = $(".dropdown");
$(function () {
    $(toggle).on("click", function (e) {
        e.preventDefault(), menu.toggle()
    }), $(hasChild).click(function (e) {
        e.preventDefault(), dropdown.toggle()
    })
}), $(window).resize(function () {
    w > 320 && menu.is(":hidden") && menu.removeAttr("style")
});
var $active, $indicator, resetTimer;
$("nav .targeted").mouseover(function () {
    clearTimeout(resetTimer), moveIndicator($(this))
}).mouseout(function () {
    resetTimer = setTimeout(function () {
        moveIndicator($active)
    }, 500)
}), $(window).on("resize", function () {
    moveIndicator($active)
}), $(function () {
    $active = $("#active"), $indicator = $("#indicator"), moveIndicator($active)
}), $(function () {
    var e = 0;
    $(window).scroll(function (t) {
        var n = $(this).scrollTop();
        Math.abs(e - n) <= 5 || (n > e ? $("nav").addClass("nav-hide") : $("nav").removeClass("nav-hide"), e = n)
    })
}), function (e, t, n, o, s, a, i) {
    e.GoogleAnalyticsObject = s, e[s] = e[s] || function () {
        (e[s].q = e[s].q || []).push(arguments)
    }, e[s].l = 1 * new Date, a = t.createElement(n), i = t.getElementsByTagName(n)[0], a.async = 1, a.src = "https://www.google-analytics.com/analytics.js", i.parentNode.insertBefore(a, i)
}(window, document, "script", 0, "ga"), ga("create", "UA-74060836-2", "auto"), ga("send", "pageview");