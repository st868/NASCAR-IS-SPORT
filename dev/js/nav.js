var navItemsPAGE1 = [];

var navItemsPAGE2 = [];

var navItemsPAGE3 = ["#training","#physics","#insideTheCar"];



var scrollPosition = window.pageYOffset;
window.onscroll = function() {
    var currentPosition = window.pageYOffset;
    if (scrollPosition > currentPosition) {
    document.getElementById("#siteNav").style.top = "0";
}else if(scrollPosition < currentPosition){
    document.getElementById("#siteNav").style.top = "-50px";
    }
    scrollPosition = currentPosition;
}



gsap.to(window, {duration: 2, scrollTo: {y: navItemsPAGE3[$("header div ul li").index(this)], offsetY: 50}});
