import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {allTextToLetterNoSpaceEvenOddSpanSplitter , allTextToWordSpanSplitter } from '../function'
import { menuClickAnimation } from "./nav";

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
navLinks.forEach((link) => {
    link.addEventListener('click' , () => {
        navPageClosingAnimation()
        menuClickAnimation()
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


