var navItemsPAGE1 = [];

var navItemsPAGE2 = [];

var navItemsPAGE3 = ["#training","#physics","#insideTheCar"];



var scrollPosition = window.pageYOffset;
window.onscroll = function() {
var currentPosition = window.pageYOffset;
if (scrollPosition > currentPosition) {
    gsap.to("#siteNav", {duration: .25, y:-50});
}else if(scrollPosition < currentPosition){
    gsap.to("#siteNav", {duration: .25, y:-50});
    }
    scrollPosition = currentPosition;
}

// gsap.to(window, {duration: 2, scrollTo: {y: navItemsPAGE3[$("header #pageNav ul li").index(this)], offsetY: 50}});
