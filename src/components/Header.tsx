import type { Component } from "solid-js";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import { useThemeContext } from "../stores/ThemeContext";
import styles from "../styles/components/Header.module.scss";

const Header: Component = () => {
  const { isDarkTheme, setIsDarkTheme } = useThemeContext();

  return (
    <header class={styles.Header}>
      <h1 class={styles.Header_title}>TODO</h1>
      <img
        src={isDarkTheme() ? sun : moon}
        alt="Toggle theme"
        class={styles.Header_themeToggle}
        onClick={() => setIsDarkTheme(!isDarkTheme())}
      />
    </header>
  );
};

export default Header;
