export default class UserInfo {
  constructor() {
    this.name = document.querySelector(".profile__name");
    this.about = document.querySelector(".profile__hobbie");
  }
  getUserInfo() {
    return { name: this.name.textContent, about: this.about.textContent };
  }

  setUserInfo(name, about) {
    this.name.textContent = name;
    this.about.textContent = about;
  }
}
