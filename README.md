# kms-login

> Login service for react apps

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save kms-login
yarn add kms-login
```

## Usage

```jsx
import React, { Component } from 'react'
import { Login } from 'kms-login'

const adminPath = "/admin" // or whatever your path to loging required page is
const tokenApi = "https://sometoken.com/get/new/token"
const dataKey = "user" // the key used to manage client local storage of session

class LoginComponent extends Component {
  render() {
    return <Login admin={adminPath} dataKey={dataKey} api={tokenApi} />
  }
}
```

## License

MIT © [xpro-development](https://github.com/xpro-development)
