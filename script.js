
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)



ScrollSmoother.create({
    smooth: 1.5,
    effects: true
})

//animacoes hero

function animationPage() {
    gsap.from(".hero", {
        opacity: 0,
        duration: 1,
    })

    gsap.from("picture:nth-child(2)", {
        y: 60,
        duration: 1,
    })

    gsap.from("picture:nth-child(1)", {
        y: -60,
        duration: 1,
    })

    //animacoes cards

    gsap.from(".card", {
        opacity: 0,
        stagger: .3,
        filter: "blur(10px)",
        scrollTrigger: {
            trigger: ".cards",
            start: "0% 80%",
            end: "100% 70%",
            scrub: true,
        }
    })

    gsap.from(".sectionThanks ul li", {
        opacity: 0,
        x: 40,
        filter: "blur(10px)",
        stagger: .03,
        scrollTrigger: {
            trigger: ".sectionThanks ul",
            start: "0% 80%",
            end: "100% 50%",
            scrub: true
        }
    })

    //animacoes footer

    gsap.from("footer", {
        y: "-30%",
        immediateRender: false,
        scrollTrigger: {
            trigger: "footer",
            scrub: true,
            invalidateOnRefresh: true,
            end: "100% 100%"
        }
    })


    const splitTextGroup = document.querySelectorAll(".splitText")

    //letras animadas

    splitTextGroup.forEach((splitText) => {
        const split = SplitText.create(splitText, {
            type: "lines, words, chars",
            mask: "lines"
        });
        gsap.from(split.chars, {
            y: 40,
            opacity: 0,
            duration: .25,
            stagger: .03,
            scrollTrigger: {
                trigger: splitText,
            }
        });
    });
}

//preloader 

const tl = gsap.timeline({
    onComplete() {
        animationPage()
        gsap.to("#preloader", {
            opacity: 0,
            display: "none",
        })
    }
});

tl.to("#preloader path", {
    duration: 1,
    strokeDashoffset: 0,
})

tl.to("#preloader path", {
    fill: "rgb(168, 19, 19)",
    strokeDashoffset: 0,
    duration: .5,
})