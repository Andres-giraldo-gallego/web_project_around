import FormValidator from "./FormValidator.js";
import Card from "./card.js";
import { initialCards } from "./utils.js";
import Section from "./Section.js";
import Popup from "./popup.js";

const popupContainer = document.querySelector(".popup");
const popupCard = document.querySelector("#popup-card");

const buttonEdit = document.querySelector(".profile_edit-button");
const buttonCerrar = document.querySelector(".popup__form-x");
const inputName = document.querySelector("#popup-name");
const inputAbout = document.querySelector("#popup-about");
const buttonGuardar = document.querySelector(".popup__Submit-Button");
const formElement = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile_name");
const profileHobbie = document.querySelector(".profile_hobbie");
const carTemplate = document.querySelector("#elements_template").content;
const buttonAdd = document.querySelector(".profile_add-button");

const buttonCrear = document.querySelector("#popup-card-Submit-Button");
const cardName = document.querySelector("#popup-card-name");
const cardLink = document.querySelector("#popup-link");
const buttonX = document.querySelector("#popup-x");
const dialogImg = document.querySelector(".dialog__content");
const dislogText = document.querySelector(".dialog__text");
const closeButtons = document.querySelectorAll(".popup__close-btn");
const closeButtonImg = document.querySelector(".dialog__button");

const popup = new Popup("#popup-card");
popup.setEventListeners();

closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener("click", function (e) {
    const popup = closeButton.closest(".popup");

    closePopup(popup);
  });
});

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

buttonAdd.addEventListener("click", function (e) {
  e.preventDefault();
  popup.open();
});

buttonEdit.addEventListener("click", function (e) {
  e.preventDefault();
  popupContainer.classList.add("popup_opened");
  cambiarNombre();
});

buttonCrear.addEventListener("click", function (e) {
  e.preventDefault();
  popupCard.classList.remove("popup_opened");
  const name = cardName.value;
  const link = cardLink.value;
  const elements = document.querySelector(".elements_container");
  const card = new Card(name, link);
  const cardElement = elements.prepend(card.createCard());
});

buttonGuardar.addEventListener("click", function (e) {
  e.preventDefault();
  popupContainer.classList.remove("popup_opened");
  profileForm();
});

function profileForm() {
  profileName.textContent = inputName.value;
  profileHobbie.textContent = inputAbout.value;
}
function cambiarNombre() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileHobbie.textContent;
}
cambiarNombre();

//  clase section
function createCard(item) {
  const card = new Card(item.name, item.link);
  const cardElement = card.createCard();
  return cardElement;
}
const elements = document.querySelector(".elements_container");
const section = new Section(initialCards, createCard, elements);

section.renderer();

closeButtonImg.addEventListener("click", function (evt) {
  evt.preventDefault();
  dialogImg.close();
});

// Cerrar por fuera del formulario
popupContainer.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-profile") {
    popupContainer.classList.remove("popup_opened");
  }
});

function closePopupContainer() {
  popupContainer.classList.remove("popup_opened");
}

popupCard.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-card") {
    popupCard.classList.remove("popup_opened");
  }
});

function closePopupCard() {
  popupCard.classList.remove("popup_opened");
}

dialogImg.addEventListener("click", function (evt) {
  console.log(dialogImg);
  if (evt.target.id === "dialog") {
    dialogImg.close();
  }
});

// cerrar popup con la letra esc

/*function precionar_tecla(evt) {
  const teclas_esc = evt.key;
  if (teclas_esc == "Escape") {
    return closePopupCard();
  }
}

function precionar_Esc(evt) {
  const teclas_esc = evt.key;
  if (teclas_esc == "Escape") {
    return closePopupContainer();
  }
}*/
// clase formValidator

const settingsValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__Submit-Button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const validation = new FormValidator(settingsValidation);
validation.enableValidation();
