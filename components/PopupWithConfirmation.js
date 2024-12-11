import Popup from "./popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleOnSubmit) {
    super(popupSelector);
    this.handleOnSubmit = handleOnSubmit;
    this._cardId = null;
  }

  open(cardId, card) {
    super.open();
    this._cardId = cardId;
    this.card = card;
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
    const botonLoading = this.popup.querySelector(".button-loading");
    const originalText = botonLoading.textContent;
    this.popup
      .querySelector(".popup__form")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this.renderLogin(true, botonLoading, originalText);
        this.handleOnSubmit(this._cardId, this.card).then(() => {
          this.renderLogin(false, botonLoading, originalText);
        });
      });
  }
}
