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

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Version with UseEffect:

// import React from "react";
// import styles from "./Credential.module.css";
// import type { Credential as CredentialType } from "../../types";

// type CredentialProps = {
//   credential: CredentialType;
// };

// function Credential ({ credential }: CredentialProps): JSX.Element {
//   return (
//     <li className={styles.credential}>
//     {credential.service} <button>Show details</button>
//     <button>Delete</button>
//     <button>Edit</button>
//     <span>{credential.username}</span>
//     <span>{credential.password}</span>
//   </li>
//   );
// }

// export default Credential;
