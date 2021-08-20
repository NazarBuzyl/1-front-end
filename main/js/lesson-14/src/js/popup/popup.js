import defaultOptions from "./defaultOptions";
import setEventPopup from "./setEventPopup";

class Popup {
    constructor(options) {
        this.options = {
            ...defaultOptions,
            ...options
        }

        this.setMode();
        setEventPopup.apply(this);
        this.tile = '';
        this.text = '';

    }

    show() {
        this.options.wrapper.classList.add('active');
    }

    hide() {
        this.options.wrapper.classList.remove('active');
    }

    setMode(mode) {
        this.options
            .wrapper
            .classList.remove(this.options.modeList[this.options.mode]);

        if (mode) {
            this.options.mode = mode;
        }

        this.options
            .wrapper
            .classList.add(this.options.modeList[this.options.mode]);
    }
}

export default Popup;
