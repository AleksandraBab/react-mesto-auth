class Api {
 constructor(options) {
    this._url = options.baseUrl
    this._headers = options.headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

      return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialData() {
      return Promise.all([this.getProfileInfo(), this.getInitialCards()])
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  getProfileInfo () {
      return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  postItem(newItem) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
       body: JSON.stringify({
        name: newItem.name,
        link: newItem.link
       })
    })
      .then(this._checkResponse)
  }

  deleteItem(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  editProfileInfo (newInfo) {
      return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
       body: JSON.stringify({
        name: newInfo.name,
        about: newInfo.about
       })
    })
      .then(this._checkResponse)
  }

  editAvatar (newAvatar) {
    return fetch(`${this._url}/users/me/avatar`, {
    method: 'PATCH',
    headers: this._headers,
     body: JSON.stringify({
      avatar: newAvatar.avatar,
     })
    })
    .then(this._checkResponse)
  }

  setLike (id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  deleteLike (id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers})
      .then(this._checkResponse)
  }

}


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-23',
  headers: {
    authorization: '907f5fd1-4c67-4fa9-95ec-e50adc015db4',
    'Content-Type': 'application/json'
  }
});

export {api}
