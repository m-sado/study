
/* Variables */

var $w = $(window);

var w = $w.width(),
	h = $w.height();

var device = {
	"BREAKPOINT":750,
	"size":(750<w)?"pc":"sp",
}



var page = {
	$d  : $("#document"),
  $s : $("#slideshow"),
  current:0,
  MAX : 4,
  time:[],
	/* [ resize ]
	---------------------------------------------------------------------*/
	init : function(){

    console.log("test");

    page.animation(page.current);

    // var img = $("#slideshow").children("img"),
    //   num = img.length,
    //   count = 0,
    //   interval = 3000;


    // img.eq(0).addClass("show");

    // setTimeout(slide, interval);

    // function slide() {
    //   img.eq(count).removeClass("show");
    //   count++;
    //   if(count >= num) {
    //     count = 0;
    //   }
    //   img.eq(count).addClass("show");
    //   setTimeout(slide, interval);
    // }

    // //TweenMax.to( '要素', 秒数, { 設定 });
    // TweenMax.to('.show', 3, {
    //   opacity: 1,
    //   repeat: -1
    // });
	},
  animation:function(num){

      console.log("num",num);

      console.log(page);


    TweenMax.to(page.$s.children(), 3, {
      opacity: 0,
      onComplete:function(){

        TweenMax.to(page.$s.children().eq(page.current), 3, {
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




  },

}


$w.on("load",function(){
	page.init();
});






