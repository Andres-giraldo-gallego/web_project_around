import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this.name = this.popup.querySelector(".dialog__text");
    this.link = this.popup.querySelector(".dialog__img");
  }
  open(name, link) {
    super.open();
    this.link.src = link;
    this.name.textContent = name;
  }
}
