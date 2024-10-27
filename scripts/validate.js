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
    const inputList = Array.from(
      forElement.querySelectorAll(settings.inputSelector)
    );
    const submitButton = forElement.querySelector(
      settings.submitButtonSelector
    );
    checkImputValiditi(inputList, submitButton, settings);

    inputList.forEach((inputElement) => {
      const errorElement = forElement.querySelector(
        `#${inputElement.name}-error`
      );

      errorElement.textContent = inputElement.validationMessage;
      if (!inputElement.checkValidity()) {
        inputElement.classList.add(settings.inputErrorClass);
      } else {
        inputElement.classList.remove(settings.inputErrorClass);
      }

      inputElement.addEventListener("input", () => {
        checkImputValiditi(inputList, submitButton, settings);
        errorElement.textContent = inputElement.validationMessage;
        if (!inputElement.checkValidity()) {
          inputElement.classList.add(settings.inputErrorClass);
        } else {
          inputElement.classList.remove(settings.inputErrorClass);
        }
      });
    });
  });
};

enableValidation(settingsValidation);

function checkImputValiditi(inputList, submitButton, settings) {
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
