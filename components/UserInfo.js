export default class UserInfo {
  constructor() {
    this.name = document.querySelector(".profile__name");
    this.about = document.querySelector(".profile__hobbie");
    this.avatar = document.querySelector(".profile__avatar");
  }
  getUserInfo() {
    return {
      name: this.name.textContent,
      about: this.about.textContent,
      avatar: this.avatar.src,
    };
  }

  setUserInfo(name, about, avatar) {
    this.name.textContent = name;
    this.about.textContent = about;
    this.avatar.src = avatar;
  }
}
