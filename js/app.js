
    let speed = 100;
    function set() {
        const dynamicText = document.querySelector("#dynamic__text");
        const dynamicTextContent = dynamicText.textContent.split("")
        const dynamicTextContentClone = [...dynamicTextContent];
        let countDelete = 0;
        let countAdd = 0;
        let typingInterval = setInterval(() => {
            typing()
        }, speed)
        
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

    let time = (Array.from(document.querySelector("#dynamic__text").getAttribute("data-content")).length + 2) * speed *2


    setInterval(set,time)