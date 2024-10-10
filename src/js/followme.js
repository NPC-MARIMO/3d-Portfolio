import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allTextToletterSpanSplitter, textToWordSpanSplitter , allTextToWordSpanSplitter } from "../function";

gsap.registerPlugin(ScrollTrigger)

textToWordSpanSplitter('.follow-me h1' , 'follow-me-h1-word-span')
allTextToletterSpanSplitter('.follow-me h1 .follow-me-h1-word-span' , 'follow-me-h1-letter-span')

let mySkillsOpeningAnimation = () => {
    let tl = gsap.timeline({scrollTrigger: {
        trigger: '.follow-me h1',
        start: 'top center',
        end: 'bottom 40%',
        scrub: true
    }});
    tl.from('.follow-me h1 .follow-me-h1-letter-span' , {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.05,
        fontWeight : 100,
    }).from('.follow-me .container .item' , {
        borderRadius : 0,
        overflow : 'hidden',
        opacity : 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.inOut'
    })
    
}

mySkillsOpeningAnimation()


let followMeContainerHoverOutAnimation = () => {
    let followMeContainer = document.querySelectorAll('.follow-me .item')
    followMeContainer.forEach((item) => {
        item.addEventListener('mouseenter' , () => {
            gsap.to(item.querySelector('.img') , {
                scale : 1,
                duration : 0.2,
                width : 30,
                height : 30,
            })
        })
        item.addEventListener('mouseleave' , () => {
            gsap.to(item.querySelector('.img') , {
                scale : 0,
                duration : 0.2,
                width : 0,
                height : 0,
            })
        })
    })
}

followMeContainerHoverOutAnimation()


let followMeClosingAnimation = () => {

    let tl = gsap.timeline({scrollTrigger: {
        trigger: '.follow-me h1',
        start: 'bottom 30%',
        end: 'bottom -10%',
        scrub: true
    }})
    tl.to('.follow-me h1 .follow-me-h1-letter-span' , {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: -0.05,
        fontWeight : 100,
        
    },'a').to('.follow-me .container .item' , {
        borderRadius : 0,
        opacity : 0,
        duration: 1,
        stagger: -0.05,
    },'a')

}

followMeClosingAnimation()