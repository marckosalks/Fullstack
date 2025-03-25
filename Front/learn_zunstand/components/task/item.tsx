import { useTaskStore } from "@/app/store/task";

export default function TaskItem() {
  const {tasks, removeTask, editTask} = useTaskStore()

  return (
    <ul>
      {tasks.map((item)=>( 
        <li key={item.id}>
        <p>{item.text}</p>
  
        <button onClick={()=> editTask(item.id, prompt("Digite o nome da nova tarefa: ", item.text ) || item.text) }>Editar</button>
        <button onClick={()=> removeTask(item.id)}>Excluir</button>
        </li>
      ))}
    </ul>
    
    
  )
}
