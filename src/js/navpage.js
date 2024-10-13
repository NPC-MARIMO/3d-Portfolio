import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {allTextToLetterNoSpaceEvenOddSpanSplitter , allTextToWordSpanSplitter } from '../function'

gsap.registerPlugin(ScrollTrigger);


allTextToWordSpanSplitter('section.navpage .nav-items h1' , 'navpage-h1-words')
allTextToLetterNoSpaceEvenOddSpanSplitter('section.navpage .nav-items h1 .navpage-h1-words')

let navPageOpeningAnimation = () => {

    let tl = gsap.timeline();

    tl.to('section.navpage' , {
        top : '13%',
        duration : .7,

    }).to('section.navpage .line',{
        x : 0,
        borderRadius : '0% 30px 30px 0% / 0% 30px 30px 0% ',
        stagger : 0.1
    },'a').to('section.navpage .nav-items h1 .even',{
        y : 0,
        stagger : 0.03
    },'a').to('section.navpage .nav-items h1 .odd',{
        y : 0,
        stagger : 0.03
    },'a')
}

let navLinks = document.querySelectorAll('section.navpage h1')
let navLines = document.querySelectorAll('section.navpage .line')
navLinks.forEach((link , i) => {
    link.addEventListener('click' , () => {
        navPageClosingAnimation()
        gsap.to('nav .line:nth-child(2)', {
            duration: 0.3,
            height: 1,
            y: 0,
            rotate: 0,
            ease: "power2.inOut",
        })
        gsap.to('nav .line:nth-child(1)', {
            duration: 0.3,
            y: 0,
            height: 1,
            rotate: 0,
            ease: "power2.inOut",
        })
        gsap.to('nav h1',{
            fontSize : '2.5rem',
            y : 0
        })

        gsap.to('nav .logo',{
            height : '3rem'
        })

    })

    link.addEventListener('mouseenter' , () => {
        let tl = gsap.timeline()
        tl.to(link,{
            duration : .3,
            opacity : 0,
            ease : 'power1.inOut'
        },'a').set(link , {
            fontStyle : "italic",
        }).to(link,{
            opacity : 1
        }).to(navLines[i] , {
            width : '80%',
        },'a')
    })

    link.addEventListener('mouseleave' , () => {
        let tl = gsap.timeline()
        tl.to(link,{
            duration : .3,
            opacity : 0,
            ease : 'power1.inOut'
        },'a').set(link , {
            fontStyle : "normal",
        }).to(link,{
            opacity : 1
        }).to(navLines[i] , {
            width : '40%',
        },'a')
    })
})

let navPageClosingAnimation = () => {

    let tl = gsap.timeline();

    tl.to('section.navpage .nav-items h1 .odd',{
        y : 100,
        stagger : 0.03
    },'a').to('section.navpage .nav-items h1 .even',{
        y : -100,
        stagger : 0.03
    },'a').to('section.navpage .line',{
        x : "-100%",
        borderRadius : 0,
        stagger : -0.1
    },'a').to('section.navpage' , {
        top : '-90%',
        duration : .7
    })
    
}
export {navPageOpeningAnimation}
export {navPageClosingAnimation}


