import React, { useState } from "react";
import styles from './styles.module.css';
import AuthService from "../../services/auth.service";

const Login = () => {
  const [ userAuth, setUserAuth ] = useState({ email: "", password: ""});
  const [ error, setError ] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setUserAuth({...userAuth, [input.name]: input.Value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(userAuth.email, userAuth.password);
      if (response.status === 200) {
        window.location = "/";
      }
    } catch (error) {
      if ( error.response && error.response.status >= 400 && error.response <= 500) {
        setError(error.response.data.message);
      }
    }
  }

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={userAuth.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={userAuth.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sing In
            </button>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Login;
