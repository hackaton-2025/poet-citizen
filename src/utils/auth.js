import { AUTH_BASE_URL } from '../configs/authBaseUrl';

class Auth  {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _handleResponse(res) {
    return (res.ok) ? res.json() : Promise.reject(res);
  }

  register(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(this._handleResponse);
  }

  login(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(this._handleResponse);
  }

  getContent(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(this._handleResponse);
  }
}

export const auth = new Auth({ baseUrl: AUTH_BASE_URL });
