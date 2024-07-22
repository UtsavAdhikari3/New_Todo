import styles from "./todoitem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  const handleDelete = (item)=>{
      console.log("Delete button clicked for item",item);
      setTodos(todos.filter((todo) => todo !== item ));
  }

  const handleClick = (name)=>{
    console.log("Item text clicked",name);
  }
    return (
      <div className={styles.item}>
        <div className={styles.itemName}>
          <span onClick={()=>handleClick(item.name)}>{item.name}</span>
        <span>
          <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>x</button>
        </span>
        </div>
        
        <hr className={styles.line}/>
      </div>
    );
  };
  
export default TodoItem;
  