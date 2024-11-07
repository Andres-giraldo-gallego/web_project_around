export default class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }

  getTemplate() {
    const cardElement = document.querySelector("#elements_template").content;

    return cardElement.querySelector(".elements_card").cloneNode(true);
  }
  setProperties() {
    this.htmlCard = this.getTemplate();
    this.cardImage = this.htmlCard.querySelector(".elements_img");
    this.cardDescription = this.htmlCard.querySelector(".elements_text");
    this.buttonTrash = this.htmlCard.querySelector(".elements__trash-img");
    this.buttonLink = this.htmlCard.querySelector(".elements_link-img");

    this.cardImage.src = this.link;
    this.cardDescription.textContent = this.name;
  }
  createCard() {
    this.setProperties();
    return this.htmlCard;
  }

  toggleLike() {
    this.buttonLink.classList.toggle(".elements_link-img-active");
  }

  removeCard() {
    this.htmlCard.remove();
  }

  setEventsListeners() {
    this.buttonLink.addEventListener("click", () => {
      this.toggleLike();
    });

    this.buttonTrash.addEventListener("click", function () {
      this.removeCard();
    });
  }

  getCard() {
    this.setProperties();
    this.setEventsListeners();
  }
}
