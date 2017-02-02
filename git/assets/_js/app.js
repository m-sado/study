
/* Variables */

var $w = $(window);

var w = $w.width(),
	h = $w.height();

var device = {
	"BREAKPOINT":750,
	"size":(750<w)?"pc":"sp",
}

var page = {
	$d : $("#document"),
  $s : $("#slideshow"),
  current:0,
  MAX : 4,
  time:[],
	/* [ resize ]
	---------------------------------------------------------------------*/
	init : function(){
    //console.log("test");
    page.animation(page.current);
	},
  animation:function(num){

    //console.log("num",num);
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






