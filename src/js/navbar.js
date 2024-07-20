import {data} from "../assets/data/data.js";
import {renderElement} from "../utils/helper.js";

export const navbar = () => {
    const containerNavbar = document.querySelector('nav');
    const audioButton = document.querySelector('.audio button');

    const listItemNavbar = (data) => (
        ` <a href=${data.path}>
            <i class="${data.icon}"></i>
            <span>${data.teks}</span>
        </a>`
    );

    renderElement(data.navbar, containerNavbar, listItemNavbar);

    let lastScrollY = window.scrollY;

    document.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY < lastScrollY) {
            containerNavbar.classList.remove('scroll');
        } else {
            containerNavbar.classList.add('scroll');
        }
        lastScrollY = currentScrollY;
    });
}
