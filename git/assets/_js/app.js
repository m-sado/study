
/* Variables */

var $w = $(window);

var w = $w.width(),
	h = $w.height();

var device = {
	"BREAKPOINT":750,
	"size":(750<w)?"pc":"sp",
}

var page =  {
	$d : $("#document"),
  $s : $(".slideshow"),
  current:0,
  MAX : 6,
  time:[],


	/* [ resize ]
	---------------------------------------------------------------------*/
	init : function(){
    //console.log("test");
    page.animation(page.current);

    var indicatorHTML = "";
    page.$s.find('img').each(function (i) {
        indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
    });
    $('.slideshow-indicator').html(indicatorHTML);

    $(".slideshow-indicator").on('click', 'a', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
          var number = $(this).index();
              numberIndex = number+1;
          // console.log(numberIndex);
            // $('.slideshow').children(currentIndex - 1);
            page.animation(numberIndex);
        }
    });


    $(".arrow").on('click', function (event) {
      // console.log('テスト');
        event.preventDefault();
        if ($(this).hasClass('prev')) {
           // console.log('テスト');
            //$('.slideshow').children(currentIndex - 1);
            page.animation(page.current--);
        } else {
          // console.log('テスト2');
            //$('.slideshow').children(currentIndex + 1);
            page.animation(page.current++);
        }
    });

	},

  animation:function(num){
    console.log("num",num);
    //console.log(page);
    TweenMax.to(page.$s.children(), 1, {
      opacity: 0,
      onComplete:function(){
        TweenMax.to(page.$s.children().eq(page.current), 1, {
          opacity: 1,
          ease : Power1.easeOut,
          onComplete:function(){
            if(page.current < page.MAX){
              page.current++;
            }else{
              page.current=0;
            }
            clearTimeout(page.time);
            page.time = setTimeout(function(){
              page.animation(page.current);
            },1000);
          }
        });
      }
    });
  }

}

$w.on("load",function(){
	page.init();
});





