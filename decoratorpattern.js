function addClassDecorator(element, className) {
    element.classList.add(className);
}


function removeClassDecorator(element, className) {
    element.classList.remove(className);
}

function addEventListenerDecorator(element, eventType, handler) {
    element.addEventListener(eventType, handler);
}

// Get the button element from the DOM
const buttonElement = document.getElementById('decoratedButton');
const changeButton = document.getElementById('changeButton');
let isStyled = false;

addEventListenerDecorator(changeButton, 'click', () => {
    if (isStyled) {
        removeClassDecorator(buttonElement, 'styledButton');
    } else {
        addClassDecorator(buttonElement, 'styledButton');
    }
    isStyled = !isStyled;
});