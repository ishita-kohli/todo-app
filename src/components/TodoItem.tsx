import { Component, For, Show } from "solid-js";
import cross from "../assets/images/icon-cross.svg";
import { useThemeContext } from "../stores/ThemeContext";
import { Todo, removeTodo, toggleTodo } from "../stores/TodosStore";
import styles from "../styles/components/TodoItem.module.scss";
import BlankCircle from "./icons/BlankCircle";
import CheckCircle from "./icons/CheckCircle";

interface Props {
  todo: Todo;
}

const TodoItem: Component<Props> = (props) => {
  const { isDarkTheme } = useThemeContext();

  return (
    <div
      class={`${styles.TodoItem} ${
        isDarkTheme() ? styles.TodoItem___dark : styles.TodoItem___light
      }`}
    >
      <div class={styles.TodoItem_check} onClick={() => toggleTodo(props.todo.id)}>
        <Show when={props.todo.complete} fallback={<BlankCircle />}>
          <CheckCircle />
        </Show>
      </div>
      <p
        class={`${styles.TodoItem_name} ${
          props.todo.complete ? styles.TodoItem_name___complete : ""
        }`}
      >
        {props.todo.task}
      </p>
      <img
        src={cross}
        alt="Toggle theme"
        class={styles.TodoItem_delete}
        onClick={() => removeTodo(props.todo.id)}
      />
    </div>
  );
};

export default TodoItem;
