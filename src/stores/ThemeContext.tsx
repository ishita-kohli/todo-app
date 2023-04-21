import { Accessor, Setter, createContext, createSignal, useContext } from "solid-js";

interface ContextProps {
  isDarkTheme: Accessor<boolean>;
  setIsDarkTheme: Setter<boolean>;
}

const ThemeContext = createContext<ContextProps>();

export function ThemeContextProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = createSignal<boolean>(true);

  return (
    <ThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext)!;
