// cursor start 
var cursor = document.querySelector("#cursor");
var cursor_blur = document.querySelector("#cursor_blur");
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
    cursor_blur.style.left = dets.x - 200 + "px";
    cursor_blur.style.top = dets.y - 200 + "px";
})

var nav_h4_all = document.querySelectorAll("#nav h4");
nav_h4_all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3;
        cursor.style.transition = "all ease 0.5s";
        cursor.style.border = "1px solid #fff";
        cursor.style.background = "transparent";
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95c11e";
        cursor.style.background = "#95c11e";
    })
})
// cursor start 

// page 1 start 
gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top 11%",
        scrub:1,
    }
})
// page 1 end 
// page 2 main start 
gsap.to("#main",{
    backgroundColor: "#000",
    duration: 0.6,
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub:2,
    }
})
// about us 
gsap.from("#about_us img, #about_us_in",{
    y : 90,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#about_us",
        scroller:"body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,  
    },
})
// Cards 
gsap.from(".card",{
    scale : 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,  
    },
})
// page 2 main end 
// page 3 main start 
// colon1 
gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4  
    }
})
// colon2 
gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4  
    }
})
// page 3 main end 
// page 4 main start
gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3  
    }
})

// page 4 main end 