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
//const dialogCerrar = document.querySelectorAll("#dialog");

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

const initialCards = [
  {
    name: "Machu Picchu",
    link: "https://media.istockphoto.com/id/1410796651/es/foto/pareja-vestida-de-ponchos-observando-las-ruinas-de-machu-picchu-per%C3%BA.jpg?s=2048x2048&w=is&k=20&c=1D6GM_8KNtEZWilnl9p7ubLQ3qQMoXIckDJthJqvLEQ=",
  },
  {
    name: "Islandia",
    link: "https://media.istockphoto.com/id/518400380/es/foto/reykjavik-la-capital-de-islandia.jpg?s=2048x2048&w=is&k=20&c=kxD7meQZ7c4feZ7n262OzWUwRyKwCf5z7AZ7Xts4K-8=",
  },
  {
    name: "Paris",
    link: "https://media.istockphoto.com/id/1145422105/es/foto/vista-a%C3%A9rea-de-la-torre-eiffel-par%C3%ADs.jpg?s=2048x2048&w=is&k=20&c=QOlXs2IPoHiZWGb6m9_QnPkOFWNU_-izRXbrErDdVOA=",
  },
  {
    name: "Cataratas del Niagara",
    link: "https://media.istockphoto.com/id/164193085/es/foto/oto%C3%B1o-en-las-cataratas-del-ni%C3%A1gara.jpg?s=1024x1024&w=is&k=20&c=0Yp7Xfck6edLOtN74N7NUqo42qH35DAUnhRSwsXkULk=",
  },
  {
    name: "Estatua de la Libertad",
    link: "https://media.istockphoto.com/id/2160923465/es/foto/estatua-de-la-libertad-bandera-estadounidense-y-horizonte-de-nueva-york.jpg?s=2048x2048&w=is&k=20&c=luvx0T2gfP3FOz9KFFb7alw_IlS3nT7kiz4eOWc4PaI=",
  },
  {
    name: "San Andres Isla",
    link: "https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/styles/imagen_noticia/public/field/image/San-andres-RTVC.jpg?itok=iVcNPiNw",
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
