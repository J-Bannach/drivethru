import React, { useEffect } from "react";
import styles from "./App.module.css";
import Credential from "./components/Credential";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import type { Credential as CredentialType } from "../types";

function App(): JSX.Element {
  const credentials: CredentialType[] = [
    {
      service: "GitHub",
      username: "Johanna",
      password: "123",
    },
    {
      service: "Google",
      username: "Johanna",
      password: "AbC",
    },
  ];

  // const credentialElements = credentials.map((credential) => (
  //   <Credential key={credential.service} {...credential} />
  // ));

  const credentialElements = credentials.map((credential) => (
    <Credential
      key={credential.service}
      service={credential.service}
      username={credential.username}
      password={credential.password}
    />
  ));

  return (
    <div className={styles.App}>
      <header>
        <h1 className={styles.Hero}>
          <Hero title="Drivethru" />
        </h1>
      </header>
      <main>
        <ul>{credentialElements}</ul>
        <footer className={styles.Footer}>
          <Footer list=""></Footer>
        </footer>
      </main>
    </div>
  );
}

export default App;

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Version with useEffect

// import React, { useEffect, useState } from "react";
// import { Credential as CredentialType } from "../types";
// import styles from "./App.module.css";
// import Credential from "./components/Credential";
// import Hero from "./components/Hero";

// function App(): JSX.Element {
//   const [credentials, setCredentials] = useState<CredentialType[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/credentials")
//     .then((response) => response.json());
//     .then((credentials) => setCredentials(credentials));
//   }, []);

//   const credentialElements = credentials.map((credential) => (
//     <Credential key={credential.service} credential={credential} />
//   ));

//   return (
//     <div className={styles.App}>
//     <header>
//       <h1>
//         <Hero title="Drivethru" />
//       </h1>
//     </header>
//     <main>
//       <ul>{credentialElements}</ul>
//       <footer>
//         <Footer list=""></Footer>
//       </footer>
//     </main>
//   </div>
//   );
// }

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
