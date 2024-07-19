import {data} from "../assets/data/data.js";
import {renderElement} from "../utils/helper.js";

export const bride = () => {
    const brideCouple = document.querySelector('.bride_couple ul');
    const brideListItem = (data) => (
        `<li data-aos="zoom-in" data-aos-duration="1000">
              <figure>
                   <img src=${data.image} alt="${data.name} animation">
                   <figcaption>${data.name}</figcaption>
              </figure>
              <p>${data.child} <br>dari <br> Bapak ${data.father} & Ibu ${data.mother}</p>
              <span style="display: ${data.id === 2 ? 'none' : 'block'}">&</span>
        </li>`
    )

    const brideData = [data.bride.L, data.bride.P];

    renderElement(brideData, brideCouple, brideListItem);
}