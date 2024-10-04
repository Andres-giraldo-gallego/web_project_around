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
const popupCard = document.querySelector("#popup-card-container");
const buttonCrear = document.querySelector("#popup-card-Submit-Button");
const cardName = document.querySelector("#popup-card-name");
const cardLink = document.querySelector("#popup-link");

buttonAdd.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(popupCard);
  popupCard.classList.add("popup_opened");
});

buttonEdit.addEventListener("click", function (e) {
  e.preventDefault();
  popupContainer.classList.add("popup_opened");
  cambiarNombre();
});

buttonCerrar.addEventListener("click", function (e) {
  e.preventDefault();
  popupContainer.classList.remove("popup_opened");
});

buttonCrear.addEventListener("click", function (e) {
  e.preventDefault();
  popupCard.classList.remove("popup_opened");
  submitCard();
});

buttonGuardar.addEventListener("click", function (e) {
  e.preventDefault();
  popupContainer.classList.remove("popup_opened");
  profileForm();
});

function submitCard() {
  cardName.textContent = cardName.value;
  cardLink.textContent = cardLink.value;
}

function profileForm() {
  profileName.textContent = inputName.value;
  profileHobbie.textContent = inputAbout.value;
}
function cambiarNombre() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileHobbie.textContent;
}

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
initialCards.forEach((card) => {
  let cardElement = createCard(card);
  cardsContainer.append(cardElement);
});

function createCard(card) {
  let cards = carTemplate.querySelector(".elements_card").cloneNode(true);
  cards.querySelector(".elements_img").src = card.link;
  cards.querySelector(".elements_text").textContent = card.name;
  return cards;
}
