const typedTextElement = document.getElementById('typed-text');
const textToType = "Australia";
let i = 0;
let deleting = false;
let typingSpeed = 200;
let pauseTime = 2000;

function type() {
    if (!deleting) {
        if (i < textToType.length) {
            typedTextElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        } else {
            deleting = true;
            setTimeout(type, pauseTime);
        }
    }
    }

window.onload = type;

