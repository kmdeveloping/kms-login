export default class AuthHeader {
  constructor({ dataKey }) {
    this._dataKey = dataKey;
  }

  authHeader = () => {
    const user = JSON.parse(localStorage.getItem(this._dataKey));

    if (user && user.token) {
      return new Headers({ Authorization: `Bearer ${user.token}` });
    } else {
      return {};
    }
  };
}
