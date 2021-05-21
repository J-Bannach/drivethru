import React from "react";
import styles from "./Footer.module.css";

type FooterProps = {
  list: string;
};

function Footer({ list }: FooterProps): JSX.Element {
  return (
    <li className={styles.footer}>
      {list} <ul>This is a footer!</ul>
    </li>
  );
}

export default Footer;
