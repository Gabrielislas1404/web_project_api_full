class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.headers = {
      Authorization: localStorage.getItem('jwt')
        ? `Bearer ${localStorage.getItem('jwt')}`
        : '',
      'Content-Type': 'application/json',
    };
  }

  setToken(token) {
    this.headers.Authorization = `Bearer ${token}`;
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
    console.log(`${this.baseUrl}/cards/${idCard}`);
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
    return fetch(`${this.baseUrl}/cards/${id}/likes`, {
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

const api = new Api('https://api.gabriel14.mooo.com');

export default api;

/* const api = new Api('https://api.gabriel14.mooo.com');
 */
