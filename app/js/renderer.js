// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
'use strict';

var soundButtons = document.querySelectorAll('.button-sound');

for (var i = 0; i < soundButtons.length; i++) {
    var soundButton = soundButtons[i];
    var soundName = soundButton.attributes['data-sound'].value;

    prepareButton(soundButton, soundName);
}

function prepareButton(buttonEl, soundName) {
    buttonEl.querySelector('span').style.backgroundImage = 'url("img/icons/' + soundName + '.png")';

    var audio = new Audio('./wav/' + soundName + '.wav');
    buttonEl.addEventListener('click', function () {
        audio.currentTime = 0;
        audio.play();
    });
}
// enable sending messages on ipc
const {ipcRenderer} = require('electron');


var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function () {
    ipcRenderer.send('close-main-window');
});

var settingsEl = document.querySelector('.settings');
settingsEl.addEventListener('click', function () {
    ipcRenderer.send('open-settings-window');
});

