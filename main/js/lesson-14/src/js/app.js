import createElem from "./createDom/createElem";
import Popup from "./popup/popup";

const popup = new Popup({
    wrapper: document.querySelector('.popup'),
    mode: 'alert',
    title: "my title",
    text: 'my text',
});


// setTimeout(function () {
//     popup.hide();
// }, 3000);

const btnShow = document.querySelector('.show');
const changeElem = document.querySelector('.chengeMode');

changeElem.addEventListener('change', function (e) {
    popup.setMode(e.target.value);
});

btnShow.addEventListener('click', popup.show.bind(popup));

console.log(popup);
window.popup = popup;
// document.body.append(createElem({
//     tagName: 'div',
//     classList: 'container',
//     atributes: {
//         title: "Hello"
//     },
//     content: "hello"
// }));
