import React from "react";
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
        <h1>
          <Hero title="Drivethru" />
        </h1>
      </header>
      <main>
        <ul>{credentialElements}</ul>
        <footer>
          <Footer list=""></Footer>
        </footer>
      </main>
    </div>
  );
}

export default App;
