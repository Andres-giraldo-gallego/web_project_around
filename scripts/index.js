import Card from "./card.js";
import { initialCards } from "./utils.js";

const popupContainer = document.querySelector(".popup");
const buttonEdit = document.querySelector(".profile_edit-button");
const buttonCerrar = document.querySelector(".popup__form-x");
const inputName = document.querySelector("#popup-name");
const inputAbout = document.querySelector("#popup-about");
const buttonGuardar = document.querySelector(".popup__Submit-Button");
const formElement = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile_name");
const profileHobbie = document.querySelector(".profile_hobbie");
const carTemplate = document.querySelector("#elements_template").content;
const cardsContainer = document.querySelector(".elements_container");
const buttonAdd = document.querySelector(".profile_add-button");
const popupCard = document.querySelector("#popup-card");
const buttonCrear = document.querySelector("#popup-card-Submit-Button");
const cardName = document.querySelector("#popup-card-name");
const cardLink = document.querySelector("#popup-link");
const buttonX = document.querySelector("#popup-x");
const dialogImg = document.querySelector(".dialog__content");
const dislogText = document.querySelector(".dialog__text");
const imgDialog = document.querySelector("#dialog-img");
const textDialog = document.querySelector("#dialog-text");
const closeButtons = document.querySelectorAll(".popup__close-btn");
const closeButtonImg = document.querySelector(".dialog__button");

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
  popupCard.classList.add("popup_opened");
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
  const cardElement = createCard({ name, link });
  cardsContainer.prepend(cardElement);
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

initialCards.forEach((item) => {
  const elements = document.querySelector(".elements_container");
  const card = new Card(item.name, item.link);
  const cardElement = elements.prepend(card.createCard());
});

function createCard(card) {
  let cards = carTemplate.querySelector(".elements_card").cloneNode(true);
  cards.querySelector(".elements_img").src = card.link;
  cards.querySelector(".elements_text").textContent = card.name;
  deleteElementsTrash(cards);
  toggleElementsLink(cards);
  openCardImages(card, cards);
  return cards;
}

// Sobre escribir imagen

function openCardImages(card, cards) {
  cards.querySelector(".elements_img").addEventListener("click", function () {
    dialogImg.showModal();
    imgDialog.src = card.link;
    textDialog.textContent = card.name;
  });
}
closeButtonImg.addEventListener("click", function (evt) {
  evt.preventDefault();
  dialogImg.close();
});

// botton borrar carta

function deleteElementsTrash(card) {
  let buttonTrash = card.querySelector(".elements__trash-img");
  buttonTrash.addEventListener("click", function () {
    card.remove();
  });
}
// Botton de me gusta

function toggleElementsLink(card) {
  let buttonLink = card.querySelector(".elements_link-img");
  buttonLink.addEventListener("click", function () {
    buttonLink.classList.toggle("elements_link-img-active");
  });
}

// Cerrar por fuera del formulario
popupContainer.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-profile") {
    popupContainer.classList.remove("popup_opened");
  }
});

document.addEventListener("keyup", precionar_Esc);

function closePopupContainer() {
  popupContainer.classList.remove("popup_opened");
}

popupCard.addEventListener("click", function (evt) {
  if (evt.target.id === "popup-card") {
    popupCard.classList.remove("popup_opened");
  }
});
document.addEventListener("keyup", precionar_tecla);

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

function precionar_tecla(evt) {
  teclas_esc = evt.key;
  if (teclas_esc == "Escape") {
    return closePopupCard();
  }
}

function precionar_Esc(evt) {
  teclas_esc = evt.key;
  if (teclas_esc == "Escape") {
    return closePopupContainer();
  }
}
