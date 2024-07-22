import styles from "./form.module.css";
import { useState } from "react";

const Form = ({ todos, setTodos }) => {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({name:"",done:false});


  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"",done:false});
    
  };

  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
        <input className={styles.modernInput}
          value={todo.name}
          onChange={(e) => setTodo({name:e.target.value,done:false})}
          type="text"
          placeholder="Enter a task"
        />
        <button className={styles.modernButton} type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
