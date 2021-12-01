const dynamicText = document.querySelector("#dynamic__text");
const dynamicTextContent = dynamicText.textContent.split("")
const dynamicTextContentClone = [...dynamicTextContent];
const dynamicTextContentClone2 = [...dynamicTextContent];
let countDelete = 0;
let countAdd = 0;

this.onload = () =>{
    let typingInterval = setInterval(() => {
        typing()
    }, 200)
    
    function typing() {
        if (countDelete < dynamicTextContent.length) {
            typingDelete()
        } else {
            typingAdd()
        }
    }
    
    function typingDelete() {
        dynamicTextContentClone.splice(-1, 1)
        dynamicText.textContent = dynamicTextContentClone.join("")
        countDelete++
    }
    
    function typingAdd() {
        if (countAdd < dynamicTextContent.length) {
            dynamicText.textContent += dynamicTextContent[countAdd];
            countAdd++;
        } else {
            clearInterval(typingInterval)
        }
    }
}