import axios from "axios";

export default class AuthService {
  constructor(apiUrl, dataKey) {
    this._apiUrl = apiUrl;
    this._dataKey = dataKey;
  }

  login = async (username, password) => {

    let loginFormData = new FormData();

    loginFormData.append('UserName', username);
    loginFormData.append('Password', password);

    const config = {
      method: 'POST',
      url: `${this._apiUrl}`,
      headers: { 'Content-Type': 'multipart/form-data'},
      data: loginFormData
    };

    return axios(config).then((res) => {
      if (res.data.token) {
        localStorage.setItem(this._dataKey, JSON.stringify(res.data));
      }
      return res.data;
    });
  };

  logout = () => {
    localStorage.removeItem(this._dataKey);
  };

  getUserSession = () => {
    const auth = JSON.parse(localStorage.getItem(this._dataKey));
    try {
      return JSON.parse(atob(auth.token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
}
