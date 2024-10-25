const settingsValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__Submit-Button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const enableValidation = (settings) => {
  const formList = document.querySelectorAll(settings.formSelector);

  formList.forEach((forElement) => {
    const inputList = forElement.querySelectorAll(settings.inputSelector);
    const submitButton = forElement.querySelector(
      settings.submitButtonSelector
    );
    inputList.forEach((inputElement) => {
      const errorElement = forElement.querySelector(
        `#${inputElement.name}-error`
      );

      inputElement.addEventListener("input", () => {
        errorElement.textContent = inputElement.validationMessage;
        if (!inputElement.checkValidity()) {
          inputElement.classList.add(settings.inputErrorClass);
          submitButton.disabled = true;
        } else {
          inputElement.classList.remove(settings.inputErrorClass);
          submitButton.disabled = false;
        }
      });
    });
  });
};

enableValidation(settingsValidation);
