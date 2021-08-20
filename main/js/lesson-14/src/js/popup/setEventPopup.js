function setEventPopup() {
    this.options.wrapper.addEventListener('click', function (e) {
        console.log(e.target, e.currentTarget, this)
        if (e.target === e.currentTarget
            || e.target.classList.contains('popup__btn_cansel')
            || e.target.classList.contains('popup__close')
            || (this.options.mode === 'alert' && e.target.classList.contains('popup__btn_ok'))) {
            this.hide();
        }
    }.bind(this))
}

export default setEventPopup;
