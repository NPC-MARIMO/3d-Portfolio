import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allTextToletterSpanSpanSplitter } from "../function";

gsap.registerPlugin(ScrollTrigger)

allTextToletterSpanSpanSplitter('.contact .right .container .item' , 'contact-right-item-span')

let contactOpeningAnimation = () => {
    let tl = gsap.timeline({scrollTrigger : {
        trigger : '.contact ',
        start : 'top 80%',
        end : 'bottom 90%',
        scrub : true
    }});
    tl.to('nav h1',{
        y : '-300%',
        duration :1
    })
    tl.from('.contact .left .image' , {
        scale : 0,
        opacity : 0,
        duration : 1,
    }).to('.contact .right .images .img , .contact .right .images .img img' , {
        height : 50,
        width : 50,
        opacity : 1,
        duration : 1,
        stagger :.3
    },'a').from('.contact .right .container .item .outer .contact-right-item-span' , {
        x :- 50,
        duration : 1,
        stagger : 0.03
    },'a')
}

contactOpeningAnimation()

let contactClosingAnimation = () => {
    let tl = gsap.timeline({scrollTrigger : {
        trigger : '.contact ',
        start : 'bottom 75%',
        end : 'bottom 35%',
        scrub : true
    }});
    tl.to('.contact .left .image' , {
        scale : 0,
        opacity : 0,
        duration : 1,
    }).to('.contact .right .images .img' , {
        scale : 0,
        opacity : 0,
        duration : 1,
        stagger :1  
    },'a').to('.contact .right .container .item .outer .contact-right-item-span' , {
        x : 50,
        duration : 1,
        stagger : 0.05
    },'a')

    
}

contactClosingAnimation()