import TodoItem from "./TodoItem";

const TodoList = ({todos})=>{
    <div>
        {todos.map((item)=>(
                <TodoItem key={item} item={item}/>
            ))}
            
    </div>
}

export default TodoList;