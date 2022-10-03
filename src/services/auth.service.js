import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

class AuthService {
  _user;
  _token;

  constructor() {
    this._apiUrl = 'http://localhost:8090/api/v1/auth/token';
    this._user = 'user';
    this._token = 'token';
  }

  login = async (username, password) => {
    const loginFormData = new FormData();

    loginFormData.append('UserName', username);
    loginFormData.append('Password', password);

    const config = {
      method: 'POST',
      url: `${this._apiUrl}`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: loginFormData
    };

    return axios(config).then((res) => {
      if (res.data.token) {
        const token = JSON.stringify(res.data.token);
        const user = JSON.parse(atob(token.split('.')[1]));
        localStorage.setItem(this._token, token);
        localStorage.setItem(this._user, user);
      }
      return res.data;
    });
  };

  logout = () => {
    localStorage.removeItem(this._user);
    localStorage.removeItem(this._token);
  };

  getUserSession = () => {
    const userSession = JSON.parse(localStorage.getItem(this._user));
    userSession.token = JSON.parse(localStorage.getItem(this._token));

    try {
      return userSession;
    } catch (e) {
      return null;
    }
  };
}

export default new AuthService();
