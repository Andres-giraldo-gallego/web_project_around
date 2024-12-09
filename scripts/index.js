import FormValidator from "../components/FormValidator.js";
import Card from "../components/card.js";
/*import { initialCards } from "./utils.js";*/
import Section from "../components/section.js";
import Popup from "../components/popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import api from "./Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const buttonEdit = document.querySelector(".profile__edit-button");
const inputName = document.querySelector("#popup-name");
const inputAbout = document.querySelector("#popup-about");
const profileName = document.querySelector(".profile__name");
const profileHobbie = document.querySelector(".profile__hobbie");
const buttonAdd = document.querySelector(".profile__add-button");
const cardName = document.querySelector("#popup-card-name");
const cardLink = document.querySelector("#popup-link");
const imagAvatar = document.querySelector(".profile__avatar-edit");

// clase popup
const popup = new PopupWithForm("#popup-card", creatCard);

const popupEditAvatar = new PopupWithForm("#popup-avatar", editAvatar);
function editAvatar(data) {
  api.editAvatarUser(data.avatar).then((response) => {
    userInfo.setUserInfo(response.name, response.about, response.avatar);
    popupEditAvatar.close();
  });
}

const popupprofile = new PopupWithForm("#popup-profile", profileForm);
const popupDialog = new Popup("#dialog");
const imagepopup = new PopupWithImage("#dialog");
const userInfo = new UserInfo();

const popupWithConfirmation = new PopupWithConfirmation(
  "#popup-delete",
  (cardId, card) => {
    api.deleteCard(cardId).then(() => {
      popupWithConfirmation.close();
      card.removeCard();
    });
  }
);
console.log(popupWithConfirmation);

popup.setEventListeners();
popupprofile.setEventListeners();
popupDialog.setEventListeners();
imagepopup.setEventListeners();
popupEditAvatar.setEventListeners();
popupWithConfirmation.setEventListeners();

// clase PopupWithForm

buttonAdd.addEventListener("click", function (e) {
  e.preventDefault();
  popup.open();
});

buttonEdit.addEventListener("click", function (e) {
  e.preventDefault();
  popupprofile.open();
  cambiarNombre();
});

let section;

function creatCard() {
  api
    .createCard({
      name: cardName.value,
      link: cardLink.value,
    })
    .then((response) => {
      const newCard = createCard(response);

      section.addNewItem(newCard);
    });
}

api.getInitialCards().then((initialCards) => {
  section = new Section(initialCards, createCard, elements);

  section.renderer();
});

api.getUserInfo().then((Response) => {
  userInfo.setUserInfo(Response.name, Response.about, Response.avatar);
});

imagAvatar.addEventListener("click", (evt) => {
  evt.preventDefault();
  popupEditAvatar.open();
});

// userinfo

function profileForm(data) {
  api.editUserInfo(data).then((Response) => {
    userInfo.setUserInfo(Response.name, Response.about, Response.avatar);
  });
  popupprofile.close();
}
function cambiarNombre() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileHobbie.textContent;
}
cambiarNombre();

//  clase section
function createCard(item) {
  const card = new Card(item.name, item.link, item._id, handleOpenImage, () => {
    popupWithConfirmation.open(item._id, card);
  });

  const cardElement = card.createCard();
  return cardElement;
}
const elements = document.querySelector(".elements__container");

function handleOpenImage(name, link) {
  imagepopup.open(name, link);
}

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
