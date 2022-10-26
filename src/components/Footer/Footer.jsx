import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerMenu}>
        <li>Terms of service</li>
        <li>Privacy policy</li>
        <li>Copyright</li>
      </ul>
      <ul className={styles.footerMenu}>
        <li>nerds.family Version 1.2</li>
        <li>Last update 10/09/2022</li>
      </ul>
    </footer>
  );
};

export default Footer;
