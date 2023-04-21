import type { Component } from "solid-js";
import { useThemeContext } from "../stores/ThemeContext";
import {
  Filter as FILTER,
  activeTodoCount,
  filter,
  removeCompletedTodos,
  setFilter,
} from "../stores/TodosStore";
import styles from "../styles/components/Controls.module.scss";

const CompletionStatus: Component = () => {
  return (
    <div class={styles.CompletionStatus}>{activeTodoCount} items left</div>
  );
};

const ClearCompleted: Component = () => {
  return (
    <div class={styles.ClearCompleted}>
      <button onClick={() => removeCompletedTodos()}>Clear Completed</button>
    </div>
  );
};

const Filter: Component = () => {
  return (
    <ul class={styles.Filter}>
      <li
        class={`${styles.Filter_item} ${
          filter() === FILTER.ALL ? styles.Filter_item___active : ""
        }`}
      >
        <button
          class={styles.Filter_button}
          onClick={() => setFilter(FILTER.ALL)}
        >
          All
        </button>
      </li>
      <li
        class={`${styles.Filter_item} ${
          filter() === FILTER.ACTIVE ? styles.Filter_item___active : ""
        }`}
      >
        <button
          class={styles.Filter_button}
          onClick={() => setFilter(FILTER.ACTIVE)}
        >
          Active
        </button>
      </li>
      <li
        class={`${styles.Filter_item} ${
          filter() === FILTER.COMPLETE ? styles.Filter_item___active : ""
        }`}
      >
        <button
          class={styles.Filter_button}
          onClick={() => setFilter(FILTER.COMPLETE)}
        >
          Complete
        </button>
      </li>
    </ul>
  );
};

const Controls: Component = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <div
      class={`${styles.ControlsLayout} ${
        isDarkTheme()
          ? styles.ControlsLayout___dark
          : styles.ControlsLayout___light
      }`}
    >
      <CompletionStatus />
      <ClearCompleted />
      <Filter />
    </div>
  );
};

export default Controls;
