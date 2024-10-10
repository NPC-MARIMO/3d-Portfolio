import gsap from "gsap";
import { allTextToletterSpanSplitter } from "../function";

let menu = document.querySelector(".menu")

let menuClickAnimation = () => {
    // intialising active
    let active = false;

    // toggles active
    const activeHandler = () => {
        active = !active;
    }

    // animation on clicking on menu
    const initClickAnimation = () => {
        if (!active) {
            gsap.to('.line:nth-child(1)', {
                duration: 0.3,
                rotate: 45,
                ease: "power2.inOut",
                y: 7,
                height: 2,
            })
            gsap.to('.line:nth-child(2)', {
                width: "100%",
                height: 2,
                duration: 0.3,
                rotate: -45,
                y: -7,
                ease: "power2.inOut",
            })

        } else {
            gsap.to('.line:nth-child(2)', {
                duration: 0.3,
                height: 1,
                y: 0,
                rotate: 0,
                ease: "power2.inOut",
            })
            gsap.to('.line:nth-child(1)', {
                duration: 0.3,
                y: 0,
                height: 1,
                rotate: 0,
                ease: "power2.inOut",
            })

        }
    }


    // adding eventlistener click to perform animarion
    menu.addEventListener("click", () => {
        initClickAnimation();
        activeHandler()
    })
}

menuClickAnimation()

let mouseEnterLeaveAnimation = () => {
    // evenetlistener mouseenter to perform animation
    menu.addEventListener('mouseenter', () => {
        gsap.to('.line:nth-child(2)', {
            width: "100%",
            duration: 0.3,
            ease: "power2.inOut",
        })
    })

    // event listener mouseleave to perform animaiton
    menu.addEventListener('mouseleave', () => {
        gsap.to('.line:nth-child(2)', {
            width: "80%",
            duration: 0.3,
            ease: "power2.inOut",
        })
    })
}

mouseEnterLeaveAnimation();

// splitting all the headings available in nav
allTextToletterSpanSplitter('nav .logo h1' , 'nav-h1-span')

let navOpeningAnimation = () => {

    let tl = gsap.timeline();
    
    // lines animation
    tl.from('nav .menu .line' , {
        x : -100,
        stagger : 0.1,
        ease : 'back.inOut',
        duration : 0.5
    })

    tl.from('nav .logo .nav-h1-span' , {
        y : 100,
        stagger:0.05,
        ease : "back.inOut"
    })

}

navOpeningAnimation()
