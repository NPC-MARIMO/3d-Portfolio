// splits the text into letters and adds to span
let noSpaceSplitter = (text , el) => {
    let textWords = text.textContent.split('')
    let clutter = "";
    
    textWords.forEach((w) => {
        clutter += `<span class=${el}>${w}</span>`
        text.innerHTML = clutter
    })
}

// splits the text into words and adds to span
let spaceSplitter = (text , el) => {

    let textWords = text.textContent.split(' ')
    let clutter = "";
    
    textWords.forEach((letter) => {
        clutter += `<span class=${el}>${letter}</span>`
        text.innerHTML = clutter
    })
}

// splits the text into letters and adds to span with outer span
let noSpaceSpanSplitter = (text , el) => {
    let textWords = text.textContent.split('')
    let clutter = "";
    
    textWords.forEach((w) => {
        clutter += `<span class = "outer"> <span class=${el}>${w}</span> </span>`
        text.innerHTML = clutter
    })
}

// splits the text into words and adds to span with outer span
let spaceSpanSplitter = (text , el) => {

    let textWords = text.textContent.split(' ')
    let clutter = "";
    
    textWords.forEach((letter) => {
        clutter += `<span class = "outer"> <span class=${el}>${letter}</span> </span>`
        text.innerHTML = clutter
    })
}

let noSpaceEvenOddSpanSplitter = (text) => {
    let textWords = text.textContent.split('')
    let clutter = '';
    textWords.forEach((letter , i) => {
        if(i%2==0){
            clutter+= `<span class='even'>${letter}</span>`
           
        }
        else{
            clutter+= `<span class='odd'>${letter}</span>`
            
        }
        text.innerHTML = clutter
    })
}

//1
const textToLetterSpanSplitter = (location , el) => {
    let text = document.querySelector(`${location}`)
    noSpaceSplitter(text , el)
}

export {textToLetterSpanSplitter}

//2
const textToWordSpanSplitter = (location , el) => {
    let text = document.querySelector(`${location}`)
    spaceSplitter(text , el)
}

export {textToWordSpanSplitter}

//3
const textToLetterSpanSpanSplitter = (location , el) => {
    let text = document.querySelector(`${location}`)
    noSpaceSpanSplitter(text , el)
}

export {textToLetterSpanSpanSplitter}

//4
const textToWordSpanSpanSplitter = (location , el) => {
    let text = document.querySelector(`${location}`)
    spaceSpanSplitter(text , el)
}

export {textToWordSpanSpanSplitter}

//5
let allTextToletterSpanSplitter = (location , el) => {
    let text = document.querySelectorAll(`${location}`)
    text.forEach((t) => {
        noSpaceSplitter(t , el)
    })
}

export {allTextToletterSpanSplitter}

//6
let allTextToWordSpanSplitter = (location , el) => {
    let text = document.querySelectorAll(`${location}`)
    text.forEach((t) => {
        spaceSplitter(t , el)
    })
}

export {allTextToWordSpanSplitter}

//7
let allTextToletterSpanSpanSplitter = (location , el) => {
    let text = document.querySelectorAll(`${location}`)
    text.forEach((t) => {
        noSpaceSpanSplitter(t , el)
    })
}

export {allTextToletterSpanSpanSplitter}

//8
let allTextToWordSpanSpanSplitter = (location , el) => {
    let text = document.querySelectorAll(`${location}`)
    text.forEach((t) => {
        spaceSpanSplitter(t , el)
    })
}

export {allTextToWordSpanSpanSplitter}

// 9 
let allTextToLetterNoSpaceEvenOddSpanSplitter = (location) => {
    let texts = document.querySelectorAll(`${location}`);
    texts.forEach((t) => {
        noSpaceEvenOddSpanSplitter(t)
    })
}

export {allTextToLetterNoSpaceEvenOddSpanSplitter}