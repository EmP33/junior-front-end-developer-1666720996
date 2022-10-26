import React from "react";
import styles from "./Menu.module.css";
import avatar from "../../assets/Frame46.png";
import Logo from "../../assets/logo";

const Menu = () => {
  return (
    <header className={styles.navigation}>
      <Logo />
      <img src={avatar} alt="avatar" />
    </header>
  );
};

export default Menu;
