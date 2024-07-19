import { data } from "../assets/data/data.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');
    const mapLink = timeContainer.querySelector('a');
    const addressParagraph = timeContainer.querySelector('a + p');

    const createTimeListItem = (title, details) => (
        `<h3>${title}</h3>
         <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
         Pukul ${details.hours.start} WIB sd ${details.hours.finish}</p>`
    );

    marriageDiv.innerHTML = createTimeListItem('Akad', data.time.marriage);
    receptionDiv.innerHTML = createTimeListItem('Resepsi', data.time.reception);

    mapLink.href = data.link.map;
    addressParagraph.textContent = data.time.address;
};
