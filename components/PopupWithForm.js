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

  renderLogin(isLoading, botonLoading, originalText) {
    console.log(originalText);
    if (isLoading) {
      botonLoading.textContent = "Cargando...";
    } else {
      botonLoading.textContent = originalText;
    }
    setTimeout(() => {}, 3000);
  }

  setEventListeners() {
    super.setEventListeners();
    const form = this.popup.querySelector(".popup__form");
    const botonLoading = this.popup.querySelector(".button-loading");
    const originalText = botonLoading.textContent;
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.renderLogin(true, botonLoading, originalText);
      const data = this.getInputValues();
      this.handleForsubmit(data).then(() => {
        this.renderLogin(false, botonLoading, originalText);
        this.close();
      });
    });
  }
}
