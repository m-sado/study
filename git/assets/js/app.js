var $w=$(window),w=$w.width(),h=$w.height(),device={BREAKPOINT:750,size:750<w?"pc":"sp"},page={$d:$("#document"),$s:$(".slideshow"),current:0,MAX:6,time:[],init:function(){page.animation(page.current);var e="";page.$s.find("img").each(function(n){e+='<a href="#">'+(n+1)+"</a>"}),$(".slideshow-indicator").html(e),$(".slideshow-indicator").on("click","a",function(e){if(e.preventDefault(),!$(this).hasClass("active")){var n=$(this).index();numberIndex=n+1,page.animation(numberIndex)}}),$(".arrow").on("click",function(e){e.preventDefault(),$(this).hasClass("prev")?page.animation(page.current--):page.animation(page.current++),page.current>=page.MAX?page.current=0:page.current<=0&&(page.current=page.MAX)})},animation:function(e){console.log("num",e),TweenMax.to(page.$s.children(),1,{opacity:0,onComplete:function(){TweenMax.to(page.$s.children().eq(page.current),1,{opacity:1,ease:Power1.easeOut,onComplete:function(){page.current<page.MAX?page.current++:page.current=0,clearTimeout(page.time),page.time=setTimeout(function(){page.animation(page.current)},1e3)}})}})}};$w.on("load",function(){page.init()});