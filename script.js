import gsap from 'gsap'
document.addEventListener('mousemove', (e) => {

    gsap.to('.cursor' , {
        duration: .3,
        x: e.clientX - 10,
        y: e.clientY - 10,
    })
    gsap.to('.cursor-shadow' , {
        duration: .5,
        x: e.clientX - 17,
        y: e.clientY - 17,
    })

});

let pointeredElements = document.querySelectorAll(".pointer");

pointeredElements.forEach((el) => {

    el.addEventListener('mouseenter' , () => {
        gsap.to('.cursor' , {
            scale : .5
        })
    })

    el.addEventListener('mouseleave' , () => {
        gsap.to('.cursor' , {
            scale : 1
        })
    })   

})
document.addEventListener('click' , () => {

    gsap.to('.cursor-shadow' , {
        scale : 1.5,
        duration : .2,
    })

    gsap.to('.cursor-shadow' , {
        scale : 1,
        delay : 0.15
    })
    
})