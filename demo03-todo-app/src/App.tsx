import { Toaster } from "react-hot-toast"
import { AddTodo } from "./Components/AddTodo"
import { TodoList } from "./Components/TodoList"
import './App.sass'

function App() {
  return (
    <div>
      <Toaster position="bottom-center" />
      <AddTodo />
      <TodoList />
    </div>

  )
}

export default App
