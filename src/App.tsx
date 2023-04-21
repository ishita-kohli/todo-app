import { Component } from "solid-js";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { useThemeContext } from "./stores/ThemeContext";
import { addTodo } from "./stores/TodosStore";
import styles from "./styles/pages/Home.module.scss";

const App: Component = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <div class={styles.App_container}>
      <main
        class={`${styles.App} ${
          isDarkTheme() ? styles.App___dark : styles.App___light
        }`}
      >
        <Header />
        <Input
          onSubmit={(todo) => {
            addTodo(todo);
          }}
        />
        <TodoList />
        <Controls />
      </main>
    </div>
  );
};

export default App;
