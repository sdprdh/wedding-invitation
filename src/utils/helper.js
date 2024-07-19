export const generateRandomId = () => {
    return Math.floor(100000 + Math.random() * 900000);
}

export const generateRandomColor = () => {
    const avoidColors = ['#000000', '#ffffff', '#f0f0f0', '#f5f5f5', '#fafafa'];

    let color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

    while (avoidColors.includes(color)) {
        color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    return color;
}

export const renderElement = (data, element, listItem) => {
    element.innerHTML = '';
    data.map((data) => element.innerHTML += listItem(data));
}

export const addClassElement = (element, newClass) => {
    element.classList.add(newClass);
}

export const removeClassElement = (element, currentClass) => {
    element.classList.remove(currentClass);
}