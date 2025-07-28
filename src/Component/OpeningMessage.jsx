import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const OpeningMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  return (
    todoItems.length === 0 && (
      <p>
        <b style={{ color: "red" }}>You have no To-Do list</b>
      </p>
    )
  );
};

export default OpeningMessage;
