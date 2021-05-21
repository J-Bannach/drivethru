import React from "react";
import styles from "./Credential.module.css";

type CredentialProps = {
  service: string;
};

function Credential({ service }: CredentialProps): JSX.Element {
  return (
    <li className={styles.credential}>
      {service} <button>Show details</button>
      <button>Delete</button>
      <button>Edit</button>
    </li>
  );
}

export default Credential;
