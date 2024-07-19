import {renderElement} from "../utils/helper.js";
import {data} from "../assets/data/data.js";

export const wishas = () => {
    const wishasContainer = document.querySelector('.wishas');

    const initialBank = () => {
        const wishasBank = wishasContainer.children[1];
        const [_, __, containerBank] = wishasBank.children;

        const listItemBank = (data) => (
            `  <figure data-aos="zoom-in" data-aos-duration="1000">
                    <img src=${data.icon} alt="bank icon animation">
                    <figcaption>No. Rekening ${data.rekening.slice(0, 4)}xxxx <br>A.n ${data.name}</figcaption>
                    <button data-rekening=${data.rekening} aria-label="copy rekening">Salin No. Rekening</button>
               </figure>`
        );

        renderElement(data.bank, containerBank, listItemBank);

        containerBank.querySelectorAll('button').forEach(async (button) => {
            button.addEventListener('click', (e) => {
                try {
                    const rekening = e.target.dataset.rekening;
                    navigator.clipboard.writeText(rekening);
                    button.textContent = 'Berhasil menyalin';
                } catch (e) {
                    console.log(`Error : ${e.message}`);
                } finally {
                    setTimeout(() => {
                        button.textContent = 'Salin No. Rekening';
                    }, 2000);
                }
            });
        });
    };


    initialBank();
}