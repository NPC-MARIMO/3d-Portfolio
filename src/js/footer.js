import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allTextToletterSpanSpanSplitter, textToLetterSpanSplitter } from "../function";

gsap.registerPlugin(ScrollTrigger)

textToLetterSpanSplitter('footer h1' , 'footer-h1-letter-span')
allTextToletterSpanSpanSplitter('.footer p' , 'footer-p-letter-span')

let footerOpeningAnimation = () => {

    let tl = gsap.timeline({scrollTrigger : {
        trigger : 'footer h1',
        start : 'top 80%',
        toggleActions : 'play reverse play reverse'
    }});
    tl.from('footer h1 .footer-h1-letter-span' , {
        y : 60,
        opacity : 0,
        duration : .4,
        stagger : 0.05
    },'a').from('.footer-p-letter-span' , {
        x: -30,
        duration : .4,
        stagger : 0.02
    },'a').to('footer .footer .img , footer .footer .img img' , {
        height : 30,
        width : 30,
        stagger : .1,
        duration : .5
    },'a')
}

footerOpeningAnimation()
