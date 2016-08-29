/* responsive nav */
var w = $(window).width(),
    toggle 		= $('#toggle-menu'),
    menu 		= $('nav ul'),
    hasChild = $('.has-child'),
    dropdown = $('.dropdown');

$(function() {
  $(toggle).on('click', function(e) {
    e.preventDefault();
    menu.toggle();
  });

  $(hasChild).click(function(e) {
    e.preventDefault();
    dropdown.toggle();
  });
});

$(window).resize(function(){
  if(w > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');}
});

/* hover event */
// cache elements
var $active,
    $indicator,
    resetTimer;
// events
$("nav .targeted").mouseover(function(){
  clearTimeout(resetTimer);
  moveIndicator($(this));
}).mouseout(function(){
  resetTimer = setTimeout(function(){
    moveIndicator($active);
  }, 500);
});
// indicator move
$(window).on('resize', function() {
  moveIndicator($active);
  });
// init
$(function(){
	$active = $("#active");
  $indicator = $("#indicator");
  moveIndicator($active);
});
function moveIndicator($elm){
  $indicator.css({
    left: $elm.position().left,
    width: $elm.width(),
    backgroundColor: $elm.css("color")
  })
}

/* hiding */
$(function(){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();

       if(Math.abs(lastScrollTop - st) <= delta)
          return;

       if (st > lastScrollTop){
         // Scroll down
         $('nav').addClass('nav-hide');
       } else {
         // Scroll up
         $('nav').removeClass('nav-hide');
       }
       lastScrollTop = st;
    });
});
