# kms-login

> Login service for react apps

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save kms-login
yarn add kms-login
```

## Usage

```text
Add 3 Env variables

REACT_APP_AUTH_TOKEN_URL=your token api url
REACT_APP_SESSION_DATA_KEY= the data key for a login session (defaults to 'user')
REACT_APP_PROTECTED_ENDPOINT= the protected page of your app (defaults to '/admin')
```

```jsx
import React, { Component, Fragment } from 'react'
import LoginComponent  from 'kms-login'
// Class
class Home extends Component {
  render() {
    return <LoginComponent />
  }
}
// Hook
const Home = () => {
  return (
    <Fragment>
      <LoginComponent />
    </Fragment>
  )
}
```

## License

MIT © [xpro-development](https://github.com/xpro-development)
