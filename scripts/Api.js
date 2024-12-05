class Api {
  constructor(options) {
    this.baseURL = options.baseUrl;
    this.headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this.baseURL}/cards`, {
      method: "GET",
      headers: {
        ...this.headers,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  getUserInfo() {
    return fetch(`${this.baseURL}/users/me`, {
      method: "GET",
      headers: {
        ...this.headers,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  editUserInfo(body) {
    return fetch(`${this.baseURL}/users/me`, {
      method: "PATCH",
      headers: {
        ...this.headers,
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  editAvatarUser(avatar) {
    return fetch(`${this.baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        ...this.headers,
      },
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
    return fetch(`${this.baseURL}/cards/`, {
      method: "POST",
      headers: {
        ...this.headers,
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "387a3808-ad6d-45cd-b127-9db5833c8e93",
    "Content-Type": "application/json",
  },
});

export default api;
