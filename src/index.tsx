/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import { ThemeContextProvider } from "./stores/ThemeContext";
import "./styles/main.scss";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(() => {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
}, root!);
