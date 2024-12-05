import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, handleForsubmit) {
    super(popup);
    this.handleForsubmit = handleForsubmit;
  }

  close() {
    super.close();
    const form = this.popup.querySelector(".popup__form");
    form.reset();
  }

  getInputValues() {
    let values = {};
    const form = this.popup.querySelector(".popup__form");
    const inputList = form.querySelectorAll("input");
    inputList.forEach((popup) => {
      if (popup.name) {
        values[popup.name] = popup.value;
      }
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    const form = this.popup.querySelector(".popup__form");
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const data = this.getInputValues();
      this.handleForsubmit(data);
      this.close();
    });
  }
}
