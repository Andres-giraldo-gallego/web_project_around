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

  setEventListeners() {
    super.setEventListeners();

    this.popup
      .querySelector(".popup__form")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this.handleOnSubmit(this._cardId, this.card);
      });
  }
}
