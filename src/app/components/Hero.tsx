import React from "react";
import styles from "./Hero.module.css";

type HeroProps = {
  title: string;
};

function Hero({ title }: HeroProps): JSX.Element {
  return <div className={styles.hero}>{title}</div>;
}

export default Hero;
