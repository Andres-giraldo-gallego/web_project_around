const baseURL = "https://around-api.es.tripleten-services.com/v1";
const headers = {
  authorization: "387a3808-ad6d-45cd-b127-9db5833c8e93",
  "Content-Type": "application/json",
};
class Api {
  getInitialCards() {
    return fetch(`${baseURL}/cards`, {
      method: "GET",
      headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  getUserInfo() {
    return fetch(`${baseURL}/users/me`, {
      method: "GET",
      headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  editUserInfo(body) {
    return fetch(`${baseURL}/users/me`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  editAvatarUser(avatar) {
    return fetch(`${baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  createCard(body) {
    return fetch(`${baseURL}/cards/`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  deleteCard(id) {
    return fetch(`${baseURL}/cards/${id}`, {
      method: "DELETE",
      headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  likeCard(id) {
    return fetch(`${baseURL}/cards/${id}/likes`, {
      method: "PUT",
      headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  dislikeCard(id) {
    return fetch(`${baseURL}/cards/${id}/likes`, {
      method: "DELETE",
      headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}

const api = new Api();

export default api;
