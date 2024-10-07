const textArea = document.getElementById('text-area');
const convertbtn = document.getElementById('convert-btn');
let isSpeaking = true;

const tts = () => {
    const synth = window.speechSynthesis;
    const text = textArea.value;
    if(!synth.speaking && text) {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }
    else if(text.length > 50) {
        if (synth.speaking && isSpeaking) {
            convertbtn.innerText = 'Pause';
            synth.resume();
            isSpeaking = false;
        }
        else {
            button.innerText = 'Resume';
            synth.pause();
            isSpeaking = true;
        }
    }
}


convertbtn.addEventListener('click', tts);