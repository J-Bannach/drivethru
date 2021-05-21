import React from "react";
import styles from "./App.module.css";
import Credential from "./components/Credential";
import Hero from "./components/Hero";

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <header>
        <h1>
          <Hero title="Drivethru" />
        </h1>
      </header>
      <main>
        <ul>
          <Credential service="GitHub" />
          {/* <Credential service="Google" /> */}
        </ul>
      </main>
    </div>
  );
}

export default App;
