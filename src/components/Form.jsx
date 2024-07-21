import { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Form;
