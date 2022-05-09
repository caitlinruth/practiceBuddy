import Timer from './timer.js'

const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');

const click1 = new Audio('../sounds/Woodblock.wav');
const click2 = new Audio('../sounds/Woodblock2.wav');

let bpm = 140;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;
let tempoTextString = 'allegro';

decreaseTempoBtn.addEventListener('click', () => {
    validateTempo();
    bpm--;
    updateMetronome();
});

increaseTempoBtn.addEventListener('click', () => {
    validateTempo();
    bpm++;
    updateMetronome();
});

tempoSlider.addEventListener('input', () => {
    bpm = tempoSlider.value;
    updateMetronome();
});

subtractBeats.addEventListener('click', () => {
    if (beatsPerMeasure <= 1) { return };
    beatsPerMeasure--;
    measureCount.textContent = beatsPerMeasure;
    count = 0;
});
addBeats.addEventListener('click', () => {
    if (beatsPerMeasure >=20) { return };
    beatsPerMeasure++;
    measureCount.textContent = beatsPerMeasure;
    count = 0;
});

startStopBtn.addEventListener('click', () => {
    count = 0;
    if (!isRunning) {
        metronome.start();
        isRunning = true;
        startStopBtn.textContent = 'STOP';
    } else {
        metronome.stop();
        isRunning = false;
        startStopBtn.textContent = 'START';
    }
} );

function updateMetronome() {
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;
    metronome.timeInterval = 60000 / bpm;

    if (bpm < 24) { tempoTextString = 'larghissimo' };
    if (bpm >= 24 && bpm < 40) { tempoTextString = 'grave' };
    if (bpm >= 40 && bpm < 65) { tempoTextString = 'lento' };
    if (bpm >= 65 && bpm < 76) { tempoTextString = 'adagio' };
    if (bpm >= 76 && bpm < 109) { tempoTextString = 'andante'};
    if (bpm >= 109 && bpm < 121) { tempoTextString = 'moderato' };
    if (bpm >= 121 && bpm < 157) { tempoTextString = 'allegro' };
    if (bpm >= 157 && bpm < 177) { tempoTextString = 'vivace' };
    if (bpm >= 177 && bpm < 201) { tempoTextString = 'presto' };
    if (bpm >= 201 ) { tempoTextString = 'prestissimo' };
 
    tempoText.textContent = tempoTextString;
}

function validateTempo() {
    if (bpm <= 20) { return };
    if (bpm >= 280) { return};
}

function playClick() {
    if ( count === beatsPerMeasure) {
        count = 0;
    }
    if (count === 0) {
        click1.play();
        click1.currentTime = 0;
    } else {
        click2.play();
        click2.currentTime = 0;
    }
    count++;
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true });