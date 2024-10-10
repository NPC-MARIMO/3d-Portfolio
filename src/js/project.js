import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textToWordSpanSplitter , allTextToletterSpanSplitter } from "../function";

gsap.registerPlugin(ScrollTrigger)


textToWordSpanSplitter('.project .project-h1' , 'project-h1-word-span')
allTextToletterSpanSplitter('.project .project-h1 .project-h1-word-span' , 'project-h1-letter-span')

let projectOpeningAnimation = () => {

    let tl = gsap.timeline({scrollTrigger : {
        trigger : '.project',
        start : 'top 80%',
        end : 'top 20%',
        scrub : true
    }});

    tl.from('.project .project-h1 .project-h1-letter-span' , {
        opacity : 0,
        x : -50,
        duration : 1,
        stagger : 0.05,
        ease : 'power2.inOut',
    },'a').from('.project .projects-container .project' , {
        x : '0%',
        opacity : 0,
        duration : 3,
        stagger : 0.02,
        ease : 'back.inOut',
    },'a').from('.project .arrow-container  ' , {
        opacity : 0,
        scale : 0,
        duration : 1,
        ease : 'back.inOut',
    },'a')

}
projectOpeningAnimation()

let arrowFunction = () => {

    let i = 1;
    let currentProject = -135;

    let rightArrow = document.querySelector('.rightArrow')
    rightArrow.addEventListener('click' , () => {
        if(currentProject==1080){
            currentProject = -135;
            gsap.to('.project .projects-container .project' , {
                x : `100%`,
                duration : 1,
                ease : 'back.inOut',
            })
        }
        else{
            console.log(currentProject)
            currentProject = currentProject + 135
            gsap.to('.project .projects-container .project' , {
                x : `-${currentProject}%`,
                duration : 1,
                ease : 'back.inOut',
            })

        }

    })

    let leftArrow = document.querySelector('.leftArrow')

    leftArrow.addEventListener('click' , (n) => {
        currentProject = currentProject - 135   

        console.log(currentProject);

        if(currentProject == -135){
            gsap.to('.project .projects-container .project' , {
                x : `130%`,
                duration : 1,
                ease : 'back.inOut',
            })
        }
        else if(currentProject == -270){
            gsap.to('.project .projects-container .project' , {
                x : `-1080%`,
                duration : 1,
                ease : 'back.inOut',
            })
        }
        else{
            gsap.to('.project .projects-container .project' , {
                x : `-${(currentProject)}%`,
                duration : 1,
                ease : 'back.inOut',
            })
        }
        
    })
}

arrowFunction()


let projectClosingAnimation = () => {
    let tl = gsap.timeline({scrollTrigger : {
        trigger : '.project',
        start : 'bottom 110%',
        end : 'bottom 70%',
        scrub : true
    }});

    tl.to('.project .project-h1 .project-h1-letter-span' , {
        opacity : 0,
        x : 50,
        duration : 1,
        stagger : 0.05,
        ease : 'power2.inOut',
    },'a').to('.project .projects-container .project' , {
        x : '0%',
        opacity : 0,
        duration : 3,
        stagger : 0.02,
        ease : 'back.inOut',
    },'a').to('.project .arrow-container  ' , {
        opacity : 0,
        scale : 0,
        duration : 1,
        ease : 'back.inOut',
    })
}
projectClosingAnimation()

