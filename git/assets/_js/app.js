
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
  type : "auto",

	/* [ resize ]
	---------------------------------------------------------------------*/
	init : function(){
    //console.log("test");
    page.animation(page.current);

    var indicatorHTML = "";
    // page.$s.find('img').each(function (i) {
    //     indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
    // });

    for(var i=0; i < page.$s.find('img').length; i++){
      indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
    }

    $('.slideshow-indicator').html(indicatorHTML);

    $(".slideshow-indicator").on('click', 'a', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
          // var number = $(this).index();
          //     numberIndex = number+1;
          // console.log(numberIndex);
            // $('.slideshow').children(currentIndex - 1);
            page.current = $(this).index();
            page.animation("ctrl");
        }
    });


    $(".arrow").on('click', function (event) {
      page.type="ctrl";
      // console.log('テスト');
        event.preventDefault();
        if ($(this).hasClass('prev')) {
         // console.log('テスト');
          page.animation("prev");
        } else {
          // console.log('テスト2');
            page.animation("next");
          }

        // if (page.current >= page.MAX) {
        //   page.current=0;
        // } else if (page.current <= 0) {
        //   page.current=page.MAX;
        // }

    });

	},

  update : function(dir){
    // console.log("update");
      if(page.type == "auto"){
        if(page.current < page.MAX){
          page.current++;
        }else{
          page.current=0;
        }
      }else{

        if(dir == "next"){
          page.current++;
        }else{
          page.current--;
        }

        // if (page.current >= page.MAX) {
        //   page.current=0;
        // } else if (page.current <= 0) {
        //   page.current=page.MAX;
        // }


      }
  },

  animation:function(dir){
    console.log("page.current",page.current);
    //console.log(page);
    TweenMax.to(page.$s.children(), 1, {
      opacity: 0,
      onComplete:function(){
        TweenMax.to(page.$s.children().eq(page.current), 1, {
          opacity: 1,
          ease : Power1.easeOut,
          onComplete:function(){
            page.update(dir);
            // if(page.current < page.MAX){
            //   page.current++;
            // }else{
            //   page.current=0;
            // }
            if(page.type == "auto") {
              clearTimeout(page.time);
              page.time = setTimeout(function(){
                page.animation(page.current);
              },1000);
            }
          }
        });
      }
    });
  }

}

$w.on("load",function(){
	page.init();
});





