export default class Popup {
  constructor(popup) {
    this.popup = document.querySelector(popup);
  }

  open() {
    this.popup.classList.add("popup_opened");
  }

  close() {
    console.log(this.popup);
    this.popup.classList.remove("popup_opened");
  }

  handleEscClose(evt) {
    console.log(evt.key === "Escape");
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keyup", this.handleEscClose);
  }
}
