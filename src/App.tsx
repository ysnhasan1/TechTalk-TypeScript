import { useState } from "react"
import { Todos } from "./interfaces/interface"

// Components
import Input from "./components/Input"
import Messages from "./components/Messages"

const App = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todos[]>([])

  const addTodo = () => {
    if (todo) {
      setTodos([...todos, { id: todos.length + 1, message: todo }])
    }
    setTodo("")
  }

  const deleteTodo = (ID: number) => {
    setTodos(todos.filter((todo) => todo.id != ID))
  }

  return (
    <>
      <Input todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <Messages todos={todos} deleteTodo={deleteTodo} />
    </>
  )
}

export default App