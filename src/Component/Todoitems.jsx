import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./Todoitems.module.css";
const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.todoNames}
          dueDate={item.dueDate}
          todoName={item.todoNames}
          onDeleteClicked={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
// This component is currently empty and does not render anything.
