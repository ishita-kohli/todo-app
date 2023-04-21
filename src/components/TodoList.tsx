import { Component, For } from "solid-js";
import { useThemeContext } from "../stores/ThemeContext";
import { Todo, filteredTodos } from "../stores/TodosStore";
import styles from "../styles/components/TodoList.module.scss";
import TodoItem from "./TodoItem";

const TodoList: Component = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <ul class={styles.TodoList}>
      <For each={filteredTodos()}>
        {(todo: Todo) => (
          <li class={styles.TodoList_item}>
            <TodoItem todo={todo} />
          </li>
        )}
      </For>
    </ul>
  );
};

export default TodoList;
