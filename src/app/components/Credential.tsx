import React from "react";
import styles from "./Credential.module.css";

type CredentialProps = {
  service: string;
  username: string;
  password: string;
};

function Credential({
  service,
  username,
  password,
}: CredentialProps): JSX.Element {
  return (
    <li className={styles.credential}>
      {service} <button>Show details</button>
      <button>Delete</button>
      <button>Edit</button>
      <span>{username}</span>
      <span>{password}</span>
    </li>
  );
}

export default Credential;
