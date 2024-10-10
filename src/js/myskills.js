import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allTextToletterSpanSplitter, textToWordSpanSplitter , allTextToWordSpanSplitter } from "../function";

gsap.registerPlugin(ScrollTrigger)

textToWordSpanSplitter('.skills h1' , 'skills-h1-word-span')
allTextToletterSpanSplitter('.skills h1 .skills-h1-word-span' , 'skills-h1-letter-span')

let mySkillsOpeningAnimation = () => {
    let tl = gsap.timeline({scrollTrigger: {
        trigger: '.skills h1',
        start: 'top center',
        end: 'bottom 40%',
        scrub: true
    }});
    tl.from('.skills h1 .skills-h1-letter-span' , {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.05,
        fontWeight : 100,
        
    }).from('.skills .container .item' , {
        borderRadius : 0,
        overflow : 'hidden',
        opacity : 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.inOut'
    })
    
}

mySkillsOpeningAnimation()

let skillContainerHoverOutAnimation = () => {
    let skillContainer = document.querySelectorAll('.skills .item')
    skillContainer.forEach((item) => {
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

skillContainerHoverOutAnimation()

let skillClosingAnimation = () => {

    let tl = gsap.timeline({scrollTrigger: {
        trigger: '.skills h1',
        start: 'bottom 30%',
        end: 'bottom -10%',
        scrub: true
    }})
    tl.to('.skills h1 .skills-h1-letter-span' , {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: -0.05,
        fontWeight : 100,
        
    },'a').to('.skills .container .item' , {
        borderRadius : 0,
        opacity : 0,
        duration: 1,
        stagger: -0.05,
    },'a')

}

skillClosingAnimation()