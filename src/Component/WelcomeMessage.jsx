import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./Welcome.module.css";
const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  return (
    todoItems.length === 0 && (
      <p className={styles.welcomemessage}>Welcome to the ToDo Application</p>
    )
  );
};

export default WelcomeMessage;
