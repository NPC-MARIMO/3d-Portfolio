let noSpaceSplitter = (text , el) => {
    let textWords = text.textContent.split('')
    let clutter = "";
    
    textWords.forEach((w) => {
        clutter += `<span class=${el}>${w}</span>`
        text.innerHTML = clutter
    })
}

let spaceSplitter = (text , el) => {
    let textWords = text.textContent.split(' ')
    let clutter = "";
    
    textWords.forEach((letter) => {
        clutter += `<span class=${el}>${letter}</span>`
        text.innerHTML = clutter
    })
}

const textToLetterSpanSplitter = (location , el) => {
    let text = document.querySelector(`${location}`)
    noSpaceSplitter(text , el)
}

export {textToLetterSpanSplitter}

const textToWordSpanSplitter = (location , el) => {
    let text = document.querySelector(`${location}`)
    spaceSplitter(text , el)
}

export {textToWordSpanSplitter}

let allTextToletterSpanSplitter = (location , el) => {
    let text = document.querySelectorAll(`${location}`)
    text.forEach((t) => {
        noSpaceSplitter(t , el)
    })
}

export {allTextToletterSpanSplitter}

let allTextToWordSpanSplitter = (location , el) => {
    let text = document.querySelectorAll(`${location}`)
    text.forEach((t) => {
        spaceSplitter(t , el)
    })
}

export {allTextToWordSpanSplitter}