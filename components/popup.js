export default class Popup {
  constructor(popup) {
    this.popup = document.querySelector(popup);
    this._isDialog = false;

    // uso de this.popup en lugar de this._popupSelector
    if (this.popup && this.popup.tagName === "DIALOG") {
      this._isDialog = true;
    }
  }

  open() {
    if (this.popup && this.popup.tagName === "DIALOG") {
      this.popup.showModal();
    } else {
      this.popup.classList.add("popup_opened");
    }
  }

  close() {
    // cierre del popup dependiendo de si es un DIALOG o un div
    if (this._isDialog) {
      this.popup.close();
    } else {
      this.popup.classList.remove("popup_opened");
    }
  }

  handleEscClose(evt) {
    // Cierra el popup si se presiona la tecla Escape
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    // Escucha el evento de Escape para cerrar el popup
    document.addEventListener("keyup", (e) => {
      this.handleEscClose(e);
    });

    // Selecciona todos los botones de cierre
    let closeButtons = this.popup.querySelectorAll(".popup__close-btn");
    if (this.popup && this.popup.tagName === "DIALOG") {
      closeButtons = this.popup.querySelectorAll(".dialog__button");
    }

    // Asegura que cada botón de cierre cierre el popup
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.close();
      });
    });

    // Cierra el popup si se hace clic en el fondo (overlay)
    this.popup.addEventListener("click", (evt) => {
      // Si el objetivo del clic es el fondo, cierra el popup
      if (evt.target === this.popup) {
        this.close();
      }
    });
  }
}
