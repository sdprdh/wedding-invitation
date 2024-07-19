import {data} from "../assets/data/data.js";
import {addClassElement, removeClassElement} from "../utils/helper.js";

export const welcome = () => {
    const homeElement = document.querySelector('.home');
    const navbarElement = document.querySelector('header nav');
    const [audioMusic, audioButton] = document.querySelector('.audio').children;

    addClassElement(homeElement, 'active');
    addClassElement(navbarElement, 'active');
    addClassElement(audioButton, 'show');

    const initialAudio = () => {
        let isPlaying = false;

        audioMusic.innerHTML = `<source src=${data.audio} type="audio/mp3"/>`;

        audioButton.addEventListener('click', () => {
            const [iconButton] = audioButton.children;

            if (!isPlaying) {
                addClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-play-circle');
                addClassElement(iconButton, 'bx-pause-circle');
                audioMusic.play();
            } else {
                removeClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-pause-circle');
                addClassElement(iconButton, 'bx-play-circle');
                audioMusic.pause();
            }
            isPlaying = !isPlaying;
        });
    };

    initialAudio();
}