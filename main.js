const textarea = document.querySelector("textarea"),
button = document.querySelector("button")

function textToSpeech(){
    let synth = window.SpeechSynthesis;
    let text  = textarea.value;

    let utterance = new SpeechSynthesisUtterance(text)
    synth.speak(utterance)
}
button.addEventListener("click",textToSpeech)