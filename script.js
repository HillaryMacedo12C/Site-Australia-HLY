
const typingElement = document.getElementById('typed-text');

const textToType = "Australia";

let i = 0; 
let deleting = false; 
let typingSpeed = 100; 
let erasingSpeed = 200; 
let pauseTime = 2000; 

function type() {
    if (!deleting) {
        if (i < textToType.length) {
            typingElement.textContent += textToType.charAt(i); 
            i++;
            setTimeout(type, typingSpeed); 
        } else {
            deleting = true; 
            setTimeout(type, pauseTime); 
        }
    } else {
        if (i > 0) {
            typingElement.textContent = typingElement.textContent.slice(0, -1); 
            i--;
            setTimeout(type, erasingSpeed); 
        } else {
            deleting = false; 
            setTimeout(type, pauseTime); 
        }
    }
}

window.onload = type;
