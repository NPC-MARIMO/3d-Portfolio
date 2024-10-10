import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allTextToWordSpanSplitter, textToLetterSpanSplitter } from "../function";

gsap.registerPlugin(ScrollTrigger)

// splitting text
textToLetterSpanSplitter('.about .right h1' , 'about-h1-span')
allTextToWordSpanSplitter('.about .right p' , 'about-p-span')

let aboutOpeningAnimation = () => {

    let tl = gsap.timeline({scrollTrigger :{
        trigger : '.about',
        start : 'top 40%',
        end : 'top 20%',
        scrub : 1,
    }});

    tl.from('.about .about-h1-span' , {
        opacity : 0,
        stagger : 0.03,
        duration : 0.2,
    },'a').from('.about .about-p-span' , {
        delay : 1.5,
        y : 50,
        opacity : 0,
        stagger : 0.03,
        duration : 0.5,
    }).from('.about .left .image' , {
        scale : 0,
        duration : 1
    },'a')
}

aboutOpeningAnimation()

let aboutClosingAnimation = () => {

    let tl = gsap.timeline({scrollTrigger :{
        trigger : '.about',
        start : 'bottom 90%',
        end : 'bottom 60%',
        scrub : 1,
    }});

    tl.to('.about .about-h1-span' , {
        opacity : 0,
        stagger : 0.03,
        duration : 0.2,
    },'a').to('.about .about-p-span' , {
        y : -50,
        opacity : 0,
        stagger : 0.03,
        duration : 0.5,
    },'a').to('.about .left .image' , {
        scale : 0,
        duration : 1
    },'a')
}

aboutClosingAnimation()