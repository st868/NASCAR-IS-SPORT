var animationTwo = gsap.timeline({
    paused: true, repeat: -1
});

    animationTwo.to("#text1_2",{alpha: 1, duration: 0})
        .to("#text1_2",{alpha: 1, duration: 2})
        .to("#text1_2",{alpha: 0, duration: .1,  ease: "Expo.easeInOut"})

        .to("#text2_2",{alpha: 1, duration: 0})
        .to("#text2_2",{alpha: 1, duration: 2})
        .to("#text2_2",{alpha: 0, duration: .1,  ease: "Expo.easeInOut"})

        .to("#text3_2",{alpha: 1, duration: 0})
        .to("#text3_2",{alpha: 1, duration: 2})
        .to("#text3_2",{alpha: 0, duration: .1,  ease: "Expo.easeInOut"})

        .to("#text4_2",{alpha: 1, duration: 0})
        .to("#text4_2",{alpha: 1, duration: 2})
        .to("#text4_2",{alpha: 0, duration: .25, ease: "power4.easeInOut"})


                .to("#text5_2",{alpha: 1, duration: 0})
                .to("#text5_2",{alpha: 1, duration: 2})
        .to("#text5_2",{alpha: 0, duration: .25, ease: "power4.easeInOut"});



$( document ).ready(function() {
    // gsap.registerPlugin(scroll);
    animationTwo.play();

});
