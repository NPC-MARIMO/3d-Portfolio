import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textToLetterSpanSplitter, textToWordSpanSplitter } from "../function/index.js";

gsap.registerPlugin(ScrollTrigger)

// spliting heading and paragraph
textToLetterSpanSplitter('.home h1' , 'home-h1-span')
textToWordSpanSplitter('.home p' , 'home-p-span')
textToWordSpanSplitter('.home h3' , 'home-h3-span')

let homeOpeningAnimation = () => {

    let tl = gsap.timeline();

    tl.from('.home .home-h1-span' , {
        delay:0.2,
        opacity: 0,
        stagger: 0.03,
        duration: 0.2
    },'a').from('.home .home-p-span' , {
        delay:0.2,
        opacity: 0,
        stagger: 0.03,
        duration: 0.2
    },'a').from('.home .home-h3-span' , {
        delay:0.2,
        y: 60,
        stagger: 0.1,
        duration: 0.2
    },'a').from('.home .right .image',{
        scale : 0,
        delay : 0.4,
        duration : 0.7
    },'a')

}
homeOpeningAnimation()

let tl = gsap.timeline({scrollTrigger: {
    trigger : '.home .home-h1-span',
    start : 'top 30%',
    scrub : 1,
    end : 'bottom 15%',
    }})

tl.to('.home .home-h1-span' , {
    opacity : 0,
    stagger : -0.07,
    
},'a').to('.home .home-h3-span' , {
    y : -60,
    stagger : -0.1,
    delay : 0.7
},'a').to('.home .home-p-span' , {
    opacity : 0,
    stagger : -0.03,
    duration :.5,
    delay : 1
},'a').to('.home .right .image' , {
    scale : 0,
    opacity : 0,
    duration : 1
},'a')