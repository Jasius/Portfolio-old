//hire button handling
function thankingForHiring() {
    var thanksWindow = $("#thanksWindow");
    setTimeout(function () {
        thanksWindow.fadeIn("300", "linear");
    }, 100);
    setTimeout(function () {
        thanksWindow.fadeOut("1000", "swing");
    }, 3000);
}

// projects truncating
$(document).ready(function () {
    (function () {
        var showChar = 600;
        var ellipsestext = "...";

        $('.truncate').each(function () {
            var content = $(this).html();
            if (content.length > showChar) {

                var c = content.substr(0, showChar);
                var h = content;
                var html = '<div class="truncate-text" style="display:block">' + c + '<span class="moreellipses">' + ellipsestext + '&nbsp;&nbsp;<a href="" class="moreless more">more</a></span></span></div><div class="truncate-text" style="display:none">' + h + '<a href="" class="moreless less">Less</a></span></div>';

                $(this).html(html);
            }

        });

        $(".moreless").click(function () {
            var thisEl = $(this);
            if (thisEl.hasClass("less")) {
                thisEl.closest('.truncate-text').prev('.truncate-text').toggle();
                thisEl.closest('.truncate-text').slideToggle();
            } else {
                thisEl.closest('.truncate-text').toggle();
                thisEl.closest('.truncate-text').next('.truncate-text').fadeToggle();
            }
            return false;
        });

    }());


});


// responsive nav
var w = $(window).width(),
    toggle = $('#toggle-menu'),
    menu = $('nav ul'),
    hasChild = $('.has-child'),
    dropdown = $('.dropdown');

$(function () {
    $(toggle).on('click', function (e) {
        e.preventDefault();
        menu.toggle();
    });

    $(hasChild).click(function (e) {
        e.preventDefault();
        dropdown.toggle();
    });
});

$(window).resize(function () {
    if (w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});

// hover events
// cache elements
var $active,
    $indicator,
    resetTimer;
// events
$("nav .targeted").mouseover(function () {
    clearTimeout(resetTimer);
    moveIndicator($(this));
}).mouseout(function () {
    resetTimer = setTimeout(function () {
        moveIndicator($active);
    }, 500);
});
// indicator move
$(window).on('resize', function () {
    moveIndicator($active);
});
// init
$(function () {
    $active = $("#active");
    $indicator = $("#indicator");
    moveIndicator($active);
});

function moveIndicator($elm) {
    $indicator.css({
        left: $elm.position().left,
        width: $elm.width(),
        backgroundColor: $elm.css("color")
    })
}

// hiding
$(function () {
    var lastScrollTop = 0,
        delta = 5;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop) {
            // Scroll down
            $('nav').addClass('nav-hide');
        } else {
            // Scroll up
            $('nav').removeClass('nav-hide');
        }
        lastScrollTop = st;
    });
});

// analytics

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-74060836-2', 'auto');
ga('send', 'pageview');
