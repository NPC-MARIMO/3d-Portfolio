import gsap from "gsap";

let navFunctions = () => {

    let active = false;
    
    const activeHandler = () =>{
        active = !active;
    }

    const menuClickAnimation = () =>{
        if(active){
            gsap.to('.line:nth-child(1)' , {
                duration: 0.3,
                rotate: 45,
                ease: "power2.inOut",
                y : 7,
                height : 2,
            })
            gsap.to('.line:nth-child(2)' , {
                width : "100%",
                height : 2,
                duration: 0.3,
                rotate: -45,
                y : -7,
                ease: "power2.inOut",
            })       
            
        }else{
            gsap.to('.line:nth-child(2)' , {
                duration: 0.3,
                height : 1,
                y : 0,
                rotate: 0,
                ease: "power2.inOut",
            })  
            gsap.to('.line:nth-child(1)' , {
                duration: 0.3,
                y : 0,
                height : 1,
                rotate: 0,
                ease: "power2.inOut",
            })     

        }
    }

    let menu = document.querySelector(".menu")
    menu.addEventListener("click", () =>{
        menuClickAnimation();
        activeHandler()
    })  

    menu.addEventListener('mouseenter', () => {
        gsap.to('.line:nth-child(2)', {
            width : "100%",
            duration: 0.3,
            ease: "power2.inOut",
        })
    })
    menu.addEventListener('mouseleave', () => {
        gsap.to('.line:nth-child(2)', {
            width : "80%",
            duration: 0.3,
            ease: "power2.inOut",
        })
    })

}
navFunctions()