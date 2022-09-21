export default class AuthHeader {
  _token;
  _user;

  constructor() {
    this._token = 'token';
    this._user = 'user';
  }

  getAuthHeader = () => {
    const user = JSON.parse(localStorage.getItem(this._user));
    const token = JSON.parse(localStorage.getItem(this._token));

    if (user && token) {
      return new Headers({ Authorization: `Bearer ${token}` });
    } else {
      return {};
    }
  };
}
