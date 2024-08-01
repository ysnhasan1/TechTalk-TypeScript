interface InputProps {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addTodo: () => void
}

const Input = ({ todo, setTodo, addTodo }: InputProps) => {
    return (
        <div>
            <input value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter todo...'></input>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input