import { Todos } from '../interfaces/interface'

interface MessagesProps {
  todos: Todos[],
  deleteTodo: (ID: number) => void
}

const Messages = ({ todos, deleteTodo }: MessagesProps) => {
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <div key={index}>{todo.message} <span onClick={() => deleteTodo(todo.id)}>X</span></div>
        )
      })}
    </>
  )
}

export default Messages