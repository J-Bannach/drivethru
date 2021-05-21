import React from "react";
import styles from "./App.module.css";
import Credential from "./components/Credential";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <header>
        <h1>
          <Hero title="Drivethru" />
        </h1>
        {/* <h2>Your password manager</h2> */}
      </header>
      <main>
        <ul>
          <Credential service="GitHub" />
          <Credential service="Google" />
        </ul>
        <Footer>
          <ul list="This is a footer"></ul>
        </Footer>
      </main>
    </div>
  );
}

export default App;
