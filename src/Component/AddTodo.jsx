import { useContext, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  // using of useState

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  //when we are using reference for todoName and dueDate we don't need to use useState;

  //no need to use useState and handleNameChange and handleDateChange;
  //when we are use useRef
  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // noOfUpdates.current += 1;
  //};
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // console.log(`Number of updates:${noOfUpdates.current}`);
  // };

  //using of useRef
  //it helps to avoid repainting the component UI  and State remain same
  //const noOfUpdates = useRef(0);

  //creating reference for todoName and dueDate
  // const todoNameRef = useRef("");
  // const dueDateRef = useRef("");

  // const handleAddButtonClicked = () => {
  // event.preventDefault();
  // const todoName = todoNameRef.current.value;
  // const dueDate = dueDateRef.current.value;
  // // console.log(`${todoName} and ${dueDate}`);
  // todoNameRef.current.value = "";
  // dueDateRef.current.value = "";
  // onNewItem(todoName, dueDate);

  // no need of these Lines when we are using useRef;
  // setDueDate("");
  // setTodoName("");

  //but when we use the useContext then below line of code is needed:

  //using of useContext here:
  const { addNewItem } = useContext(TodoItemsContext);

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  //here we use the useContext to add the new items
  const handleAddButtonClicked = () => {
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row new-row" /*onSubmit={handleAddButtonClicked}*/>
        <div className="col-6">
          <input
            type="text"
            //ref={todoNameRef} //use thid line when we use useRef
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
            // no need onChange when we are using useRef
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            //ref={dueDateRef} ////use thid line when we use useRef
            value={dueDate}
            onChange={handleDateChange}
            // no need onChange when we are using useRef
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            onSubmit={handleAddButtonClicked}
            className="btn btn-success  new-btn"
            onClick={handleAddButtonClicked}
          >
            <IoAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
