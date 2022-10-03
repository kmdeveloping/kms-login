import React from "react";
import styles from './styles.module.css';
import AuthService from "../../services/auth.service";

const Main = () => {
  const handleLogout=()=>{
    AuthService.logout();
    window.location.reload();
  }
  return(
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>fake-book</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  )
}

export default Main;
