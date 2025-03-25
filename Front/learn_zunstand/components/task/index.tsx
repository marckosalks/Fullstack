"use client"

import { FormEvent, useState } from "react";
import TaskItem from "./item";


export default function TaskList() {
  const [newTask, setNewTask] = useState("");
  
  function handleAddTask(e: FormEvent){
     e.preventDefault();
     setNewTask('');
  }

  return (
    <main>

      <span>Você tem {newTask.length} tarefas em aberto</span>

      <form onSubmit={handleAddTask}>
      
      <input type="text"
       value={newTask}
       onChange={(e)=> setNewTask(e.target.value)}
       placeholder="Adicone uma tarefa"/>
      
      <button type="submit">Adicionar</button>
      </form>

      <TaskItem/>
    </main>
  )
}
