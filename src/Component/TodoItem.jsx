import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoName, dueDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row new-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger new-btn"
            //onClick={() => onDeleteClicked(todoName)}
            onClick={() => deleteItem(todoName)}
          >
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
