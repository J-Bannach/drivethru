import React from "react";
import styles from "./Footer.module.css";

type FooterProps = {
  list: string;
};

function Footer({ list }: FooterProps): JSX.Element {
  return (
    <ul className={styles.footer}>
      {list} <li>Your everyday password manager</li>
    </ul>
  );
}

export default Footer;
