import { createMemo, createSignal } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { v4 as uuid } from "uuid";

export interface Todo {
  id: string;
  task: string;
  complete: boolean;
}

export enum Filter {
  ALL,
  ACTIVE,
  COMPLETE,
}

const [todos, setTodos] = createStore<Todo[]>([]);
const [filter, setFilter] = createSignal<Filter>(Filter.ALL);

function addTodo(task: string) {
  const todo = { id: uuid(), task, complete: false };
  setTodos(produce((todos) => todos.push(todo)));
}

function toggleTodo(id: string) {
  setTodos(
    (todo) => todo.id === id,
    produce((todo) => (todo.complete = !todo.complete))
  );
}

function removeTodo(id: string) {
  setTodos(todos.filter((todo) => todo.id !== id));
}

function removeCompletedTodos() {
  setTodos(todos.filter((todo) => !todo.complete));
}

const activeTodoCount = createMemo(
  () => todos.filter((todo) => !todo.complete).length
);

const filteredTodos = createMemo(() => {
  switch (filter()) {
    case Filter.ALL:
      return todos;
    case Filter.ACTIVE:
      return todos.filter((todo) => !todo.complete);
    case Filter.COMPLETE:
      return todos.filter((todo) => todo.complete);
    default:
      throw new Error("Illegal State: " + filter());
  }
});

export {
  filteredTodos,
  addTodo,
  toggleTodo,
  removeTodo,
  removeCompletedTodos,
  activeTodoCount,
  filter,
  setFilter,
};
