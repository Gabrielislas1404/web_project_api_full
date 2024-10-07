class Api {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, { headers: this.headers })
      .then((res) => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .catch((error) => console.error('Error', error));
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .catch((error) => console.error('Error', error));
  }
  updateUser({ name, about }) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify({
        name,
        about,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error en servidor: ${res.status}`);
        return res.json();
      })
      .catch((error) => console.error('Error', error));
  }

  updateAvatar({ avatar }) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      headers: this.headers,
      method: 'PATCH',
      body: JSON.stringify({
        avatar,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error en servidor: ${res.status}`);
        return res.json();
      })
      .catch((error) => console.error('Error', error));
  }

  addCard({ name, link }) {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify({
        name,
        link,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error en servidor: ${res.status}`);
        return res.json();
      })
      .catch((error) => console.error('Error', error));
  }

  deleteCard(idCard) {
    return fetch(`${this.baseUrl}/cards/${idCard}`, {
      headers: this.headers,
      method: 'DELETE',
      body: JSON.stringify({
        idCard,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error en servidor: ${res.status}`);
        return res.json();
      })
      .catch((error) => console.error('Error', error));
  }

  likeCard({ id, isLiked }) {
    const method = isLiked ? 'PUT' : 'DELETE';
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      headers: this.headers,
      method: method,
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error en servidor: ${res.status}`);
        return res.json();
      })
      .catch((error) => console.error('Error', error));
  }

  unlikeCard(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      headers: this.headers,
      method: 'DELETE',
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error en servidor: ${res.status}`);
        return res.json();
      })
      .catch((error) => console.error('Error', error));
  }
}

const api = new Api('https://around.nomoreparties.co/v1/web_es_12', {
  authorization: 'fa25d0a0-1783-4d33-9dd9-ca8f33a53e6d',
  'Content-Type': 'application/json',
});

export default api;
