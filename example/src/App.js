import React from 'react'
import { Login } from 'kms-login'

const App = () => {
  return <Login admin='/admin' dataKey='user' api='https://localhost:7001/api/v1/authentication/token'/>
}

export default App
