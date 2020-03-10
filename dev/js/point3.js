var animationThree = gsap.timeline({
    paused: true, repeat: -1
});

    animationThree.to("#text1_3",{alpha: 1, duration: 0})
        .to("#text1_3",{alpha: 1, duration: 2})
        .to("#text1_3",{alpha: 0, duration: .1,  ease: "Expo.easeInOut"})

        .to("#text2_3",{alpha: 1, duration: 0})
        .to("#text2_3",{alpha: 1, duration: 2})
        .to("#text2_3",{alpha: 0, duration: .1,  ease: "Expo.easeInOut"})

        .to("#text3_3",{alpha: 1, duration: 0})
        .to("#text3_3",{alpha: 1, duration: 2})
        .to("#text3_3",{alpha: 0, duration: .1,  ease: "Expo.easeInOut"})

        .to("#text4_3",{alpha: 1, duration: 0})
        .to("#text4_3",{alpha: 1, duration: 2})
        .to("#text4_3",{alpha: 0, duration: .25, ease: "power4.easeInOut"})
;



$( document ).ready(function() {
    // gsap.registerPlugin(scroll);
    animationThree.play();

});
