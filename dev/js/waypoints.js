var inviewQA = new Waypoint.Inview({
  element: $('.QAcontainer')[0],
  enter: function(direction) {
     headerColor(direction, scrollDirection = "enter");
  },
  entered: function(direction) {
        headerColor(direction , scrollDirection = "entered");
  },
  exit: function(direction) {
        headerColor(direction , scrollDirection = "exit");
  },
  exited: function(direction) {
    headerColor(direction , scrollDirection = "exited");
  },offset: {
    top: 100
  }
})


function headerColor(direction, scrollDirection){

    if(direction === "up" & scrollDirection === "enter"){
        gsap.to("#pageNav",{duration:0.15,backgroundColor:"#1C1C1E"});

    }else if(direction === "up"& scrollDirection === "entered"){
        gsap.to("#pageNav",{duration:0.15,backgroundColor:"#383838"});

    }else if(direction === "down"& scrollDirection === "exit"){
        gsap.to("#pageNav",{duration:0.15,backgroundColor:"#1C1C1E"});

    } else if(direction === "down"& scrollDirection === "exited"){
        gsap.to("#pageNav",{duration:0.15,backgroundColor:"#383838"});
    }

}
