import { data } from "../assets/data/data.js";

export const home = () => {
    const homeContainer = document.querySelector('.home');
    const figureElement = homeContainer.querySelector('figure');
    const timeElement = homeContainer.querySelector('h3');
    const calendarAnchor = homeContainer.querySelector('a');

    const generateFigureContent = () => {
        const { L: { name: brideLName }, P: { name: bridePName }, couple: coupleImage } = data.bride;

        return `
            <img src="${coupleImage}" alt="couple animation">
            <figcaption>
                ${brideLName.split(' ')[0]} & ${bridePName.split(' ')[0]}
            </figcaption>`;
    };

    const { year, month, date, day } = data.time.marriage;
    const { calendar } = data.link;

    figureElement.innerHTML = generateFigureContent();
    timeElement.innerHTML = `
        <time datetime="${year}-${String(month).padStart(2, '0')}-${String(date).padStart(2, '0')}">
            ${day}, ${date} ${month} ${year}
        </time>`;
    calendarAnchor.href = calendar;
};
