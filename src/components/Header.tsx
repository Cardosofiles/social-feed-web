import styles from "./Header.module.css";

import igniteLogo from "../../src/assets/Ignite-simbol.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo Ignite" />
      <strong>Social Feed</strong>
    </header>
  );
}
