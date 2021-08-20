import addClass from "./addClass";
import addAtributes from "./addAtributes";
import addContent from "./addContent";
import addEvents from "./addEvents";

function createElem(options) {
    if (!options || !options.tagName) return;
    const tag = document.createElement(options.tagName);

    addClass(tag, options.classList);

    addAtributes(tag, options.atributes);

    addContent(tag, options.content);

    if (options.events) addEvents(tag, options.events)

    return tag;
}

export default createElem;
