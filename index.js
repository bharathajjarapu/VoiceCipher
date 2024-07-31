import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers';

let transcriber;
const modelLoadingDiv = document.getElementById('model-loading');
const transcriptionTextarea = document.getElementById('transcription');
const transcribeBtn = document.getElementById('transcribe-btn');
const audioPlayer = document.getElementById('audio-player');

async function loadModel() {
    modelLoadingDiv.style.display = 'block';
    transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-tiny.en');
    modelLoadingDiv.style.display = 'none';
}

loadModel();

document.getElementById('choose-url').addEventListener('click', () => {
    document.getElementById('url-input').style.display = 'block';
    document.getElementById('file-upload').style.display = 'none';
    document.getElementById('record-controls').style.display = 'none';
    transcribeBtn.disabled = false;
});

document.getElementById('choose-file').addEventListener('click', () => {
    document.getElementById('url-input').style.display = 'none';
    document.getElementById('file-upload').style.display = 'block';
    document.getElementById('record-controls').style.display = 'none';
    transcribeBtn.disabled = false;
});

document.getElementById('choose-record').addEventListener('click', () => {
    document.getElementById('url-input').style.display = 'none';
    document.getElementById('file-upload').style.display = 'none';
    document.getElementById('record-controls').style.display = 'block';
    transcribeBtn.disabled = false;
});

document.getElementById('audio-file').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        audioPlayer.src = url;
        audioPlayer.style.display = 'block';
    }
});

document.getElementById('start-record').addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    window.mediaRecorder = new MediaRecorder(stream);
    window.audioChunks = [];
    window.mediaRecorder.start();
    window.mediaRecorder.ondataavailable = (e) => {
        window.audioChunks.push(e.data);
    };
    window.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(window.audioChunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        audioPlayer.src = url;
        audioPlayer.style.display = 'block';
    };
});

document.getElementById('stop-record').addEventListener('click', () => {
    if (window.mediaRecorder) {
        window.mediaRecorder.stop();
    }
});

transcribeBtn.addEventListener('click', async () => {
    let audioSrc;
    let audioBlob;
    let duration;

    transcribeBtn.innerText = 'Transcribing...';
    transcribeBtn.disabled = true;

    if (document.getElementById('url-input').style.display === 'block') {
        audioSrc = document.getElementById('audio-url').value;
        const response = await fetch(audioSrc);
        audioBlob = await response.blob();
    } else if (document.getElementById('file-upload').style.display === 'block') {
        audioSrc = audioPlayer.src;
        const response = await fetch(audioSrc);
        audioBlob = await response.blob();
    } else if (document.getElementById('record-controls').style.display === 'block') {
        audioBlob = new Blob(window.audioChunks, { type: 'audio/wav' });
    }

    if (audioBlob) {
        const audio = new Audio(URL.createObjectURL(audioBlob));
        audio.onloadedmetadata = () => {
            duration = audio.duration;
            const reader = new FileReader();
            reader.onload = async (e) => {
                const output = await transcriber(e.target.result);
                transcriptionTextarea.value = output.text;
                transcribeBtn.innerText = 'Transcribe';
                transcribeBtn.disabled = false;
            };
            reader.readAsDataURL(audioBlob);
        }
    };
}
);