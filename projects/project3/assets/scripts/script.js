gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

console.log("GSAP LOADED");

gsap.to(".hero__crab", {
    x: 30,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.timeline({
    repeat: -1
})

    .to(".hero__bird", {
        x: 1200,
        y: -60,
        rotation: 5,
        duration: 10,
        ease: "sine.inOut"
    })

    .to(".hero__bird", {
        scaleX: -1,
        duration: 0.2
    })

    .to(".hero__bird", {
        x: 0,
        y: 20,
        rotation: -5,
        duration: 10,
        ease: "sine.inOut"
    })

    .to(".hero__bird", {
        scaleX: 1,
        duration: 0.2
    });

gsap.to(".hero__beach", {
    y: 300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom center",
        scrub: true
    }
});

gsap.to(".hero__content", {
    y: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom center",
        scrub: true
    }
});

gsap.to(".hero__sticky", {
    scale: 1.12,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(".hero__umbrella", {
    x: -400,
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom center",
        scrub: true
    }
});

gsap.to(".hero__sign", {
    x: 400,
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom center",
        scrub: true
    }
});

gsap.to(".hero__crab", {
    x: 250,
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom center",
        scrub: true
    }
});

function swimFish() {
    const tl = gsap.timeline({
        repeat: -1
    });

    tl.to(".shallow-ocean__fish", {
        x: -300,
        y: -40,
        duration: 4,
        ease: "sine.inOut"
    });

    tl.set(".shallow-ocean__fish", {
        scaleX: -1
    });

    tl.to(".shallow-ocean__fish", {
        x: 0,
        y: 0,
        duration: 4,
        ease: "sine.inOut"
    });

    tl.set(".shallow-ocean__fish", {
        scaleX: 1
    });
}

gsap.to(".shallow-ocean__fish3", {
    duration: 18,
    ease: "none",
    motionPath: {

        path: "M0,0 C200,-120 400,-120 600,0 C800,120 1000,120 1200,0 C1400,-120 1600,-120 1800,0",

        curviness: 2
    }
});

swimFish();

const deepOcean = document.querySelector(".deep-ocean");

const garbageCan = document.querySelector(".deep-ocean__garbagecan");

const pollution = document.querySelectorAll(".pollution-item");

const message = document.querySelector(".cleanup-message");

const fishes = document.querySelector(".deep-ocean__fishes");

const octopus = document.querySelector(".deep-ocean__octopus");

const hint = document.querySelector(".deep-ocean__hint");


// SHOW GARBAGE CAN IN DEEP SECTION
ScrollTrigger.create({
    trigger: ".deep-ocean",
    start: "top bottom",
    end: "bottom top",

    onEnter: () => {

        garbageCan.style.display = "block";

        gsap.fromTo(
            garbageCan,
            {
                y: -120,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }
        );

        hint.style.opacity = "1";
    },

    onEnterBack: () => {

        garbageCan.style.display = "block";

        gsap.fromTo(
            garbageCan,
            {
                y: -120,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }
        );

        hint.style.opacity = "1";
    },

    onLeave: () => {

        gsap.to(garbageCan, {
            y: -120,
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
            onComplete: () => {
                garbageCan.style.display = "none";
            }
        });

        hint.style.opacity = "0";
    },

    onLeaveBack: () => {

        gsap.to(garbageCan, {
            y: -120,
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
            onComplete: () => {
                garbageCan.style.display = "none";
            }
        });

        hint.style.opacity = "0";
    }

});

gsap.to(garbageCan, {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".deep-ocean",
        start: "70% center",
        end: "bottom center",
        scrub: true
    }
});

gsap.to(hint, {
    y: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: ".deep-ocean",
        start: "70% center",
        end: "bottom center",
        scrub: true
    }
});


let cleanedCount = 0;
let messageTimeout;

// CLEANUP INTERACTION
pollution.forEach((item) => {

    item.addEventListener("click", () => {

        // STOP FLOAT ANIMATION
        item.style.animation = "none";

        const canRect =
            garbageCan.getBoundingClientRect();

        const itemRect =
            item.getBoundingClientRect();

        const moveX =
            (canRect.left + canRect.width / 2) -
            (itemRect.left + itemRect.width / 2);

        const moveY =
            (canRect.top + canRect.height / 2) -
            (itemRect.top + itemRect.height / 2);

        gsap.to(item, {
            x: moveX,
            y: moveY,
            scale: 0.2,
            rotation: 360,
            opacity: 0,
            duration: 1.2,
            ease: "power2.inOut",
            onComplete: () => {
                item.style.display = "none";
            }
        });

        // COMMENTS
        const comments = {

            "deep-ocean__oil": [
                "Oil spills poison marine life.",
                "Toxic waste spreads through the ocean.",
                "Oil pollution destroys ecosystems."
            ],

            "deep-ocean__dirt": [
                "Pollution damages ocean ecosystems.",
                "Trash slowly takes over marine habitats.",
                "The ocean cannot clean itself alone."
            ],

            "deep-ocean__fishbone": [
                "Sea creatures suffer from ocean waste.",
                "Marine life deserves cleaner waters.",
                "Every cleanup helps ocean animals survive."
            ],

            "deep-ocean__bandage": [
                "Human waste reaches even the deepest waters.",
                "Even small litter harms the ocean.",
                "Waste travels farther than we think."
            ],

            "deep-ocean__anchor": [
                "Abandoned objects harm the ocean too.",
                "Heavy waste damages the seafloor.",
                "Forgotten objects still affect marine life."
            ]
        };

        // FIND MATCHING COMMENT
        for (const className in comments) {

            if (item.classList.contains(className)) {
                console.log(className);

                const randomComment =
                    comments[className][
                    Math.floor(
                        Math.random() *
                        comments[className].length
                    )
                    ];

                message.textContent = randomComment;

                message.classList.add("show");

                clearTimeout(messageTimeout);

                messageTimeout = setTimeout(() => {

                    message.classList.remove("show");

                    message.style.background =
                        "rgba(0,0,0,0.7)";

                }, 7000);
            }
        }

        // COUNT CLEANED ITEMS
        cleanedCount++;

        // RETURN OF MARINE LIFE
        if (cleanedCount === pollution.length) {

            message.textContent =
                "Because of your actions, marine life can thrive again";

            message.classList.add("show");

            // SPECIAL FINAL MESSAGE STYLE
            message.style.background =
                "rgba(0, 120, 180, 0.8)";

            // FISHES SWIM IN
            gsap.to(fishes, {
                x: 350,
                opacity: 1,
                duration: 3,
                ease: "power2.out"
            });

            // OCTOPUS SWIMS UP
            gsap.to(octopus, {
                y: -350,
                opacity: 1,
                duration: 3,
                ease: "power2.out"
            });

            gsap.to(".deep-ocean__dolphin", {
                x: -700,
                y: 120,
                opacity: 1,
                duration: 4,
                ease: "power2.out"
            });

            clearTimeout(messageTimeout);

            messageTimeout = setTimeout(() => {

                message.classList.remove("show");

                message.style.background =
                    "rgba(0,0,0,0.7)";

            }, 9000);
        }
    });
});

gsap.from(".ending", {
    opacity: 0,
    y: 100,
    duration: 2,
    scrollTrigger: {
        trigger: ".ending",
        start: "top 80%"
    }
});

gsap.to(".ending-bottom__drop", {
    y: 320,
    opacity: 1,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".ending",
        start: "top 70%"
    }
});

gsap.to(".ending-bottom__eco", {
    opacity: 1,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: ".ending",
        start: "top 70%"
    }
});

gsap.to(".ending-bottom__drop", {
    y: 900,
    opacity: 0,
    scale: 0.7,
    scrollTrigger: {
        trigger: ".ending-bottom",
        start: "top 80%",
        end: "bottom top",
        scrub: true
    }
});

gsap.to(
    ".ending-bottom__eco, .ending-bottom__text, .ending-bottom__button",
    {
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".ending-bottom",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });

gsap.timeline({
    repeat: -1
})

    // RIGHT ∞
    .to(".ending__nemo", {
        duration: 12,
        ease: "none",
        motionPath: {
            path: "M0,0 C200,-150 400,-150 600,0 C800,150 1000,150 1200,0",
            curviness: 2
        }
    })

    // TURN
    .to(".ending__nemo", {
        scaleX: -1,
        duration: 0.01
    })

    // LEFT ∞
    .to(".ending__nemo", {
        duration: 12,
        ease: "none",
        motionPath: {
            path: "M1200,0 C1000,-150 800,-150 600,0 C400,150 200,150 0,0",
            curviness: 2
        }
    })

    // TURN BACK
    .to(".ending__nemo", {
        scaleX: 1,
        duration: 0.01
    });