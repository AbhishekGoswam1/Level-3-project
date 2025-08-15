function homepageAnimation(){
    gsap.set(".marquee-slides", {scale: 5})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: .5,
    }
})

tl.to(".videodiv", {
    '--clip': '0%',
    ease: Power2,
}, "a")
.to(".marquee-slides", {
    scale: 1,
    ease: Power2
}, "a")
.to(".left-animation", {
    xPercent: -10,
    stagger: .03,
    ease: Power4
}, "b")
.to(".right-animation", {
    xPercent: 10,
    ease: Power4
}, "b")
}


gsap.to(".slide", {
    scrollTrigger: {
        trigger: ".sliderdiv",
        start: "top top",
        end: "bottom bottom",
        scrub: 3,
    },
    xPercent: -300,
    ease: Power4
})


homepageAnimation();