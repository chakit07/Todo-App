import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTodo from "./Component/AddTodo.jsx";
import AppName from "./Component/AppName.jsx";
import OpeningMessage from "./Component/OpeningMessage.jsx";
import TodoItems from "./Component/Todoitems.jsx";
import WelcomeMessage from "./Component/WelcomeMessage.jsx";
import TodoItemsContextProvider from "./store/todo-items-store.jsx";
function App() {
  return (
    <>
      <div className="App">
        <TodoItemsContextProvider>
          <center className="todo-container">
            <AppName></AppName>
            <WelcomeMessage /*todoItems={todoItems}*/></WelcomeMessage>
            <AddTodo></AddTodo>
            <OpeningMessage></OpeningMessage>
            <TodoItems></TodoItems>
          </center>
        </TodoItemsContextProvider>
      </div>
    </>
  );
}

export default App;
