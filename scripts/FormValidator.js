const settingsValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__Submit-Button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

class FormValidator {
  constructor(settings) {
    this.settings = settings;
  }

  enableValidation() {
    const formList = document.querySelectorAll(this.settings.formSelector);

    formList.forEach((forElement) => {
      const inputList = Array.from(
        forElement.querySelectorAll(this.settings.inputSelector)
      );
      const submitButton = forElement.querySelector(
        this.settings.submitButtonSelector
      );
      this.checkImputValiditi(inputList, submitButton, this.settings);

      inputList.forEach((inputElement) => {
        const errorElement = forElement.querySelector(
          `#${inputElement.name}-error`
        );

        errorElement.textContent = inputElement.validationMessage;
        if (!inputElement.checkValidity()) {
          inputElement.classList.add(this.settings.inputErrorClass);
        } else {
          inputElement.classList.remove(this.settings.inputErrorClass);
        }

        inputElement.addEventListener("input", () => {
          this.checkImputValiditi(inputList, submitButton, this.settings);
          errorElement.textContent = inputElement.validationMessage;
          if (!inputElement.checkValidity()) {
            inputElement.classList.add(this.settings.inputErrorClass);
          } else {
            inputElement.classList.remove(this.settings.inputErrorClass);
          }
        });
      });
    });
  }

  checkImputValiditi(inputList, submitButton, settings) {
    const hasInvalidInput = inputList.some((inputElement) => {
      return !inputElement.checkValidity();
    });
    if (hasInvalidInput) {
      submitButton.disabled = true;
      submitButton.classList.add(settings.inactiveButtonClass);
    } else {
      submitButton.disabled = false;
      submitButton.classList.remove(settings.inactiveButtonClass);
    }
  }
}
const validation = new FormValidator(settingsValidation);
validation.enableValidation();
