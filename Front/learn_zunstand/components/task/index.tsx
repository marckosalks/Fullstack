"use client"

import { FormEvent, useState } from "react";
import TaskItem from "./item";
import { useTaskStore } from "@/app/store/task";


export default function TaskList() {
  const [newTask, setNewTask] = useState("");
  
  const {tasks, addTask} = useTaskStore()

  function handleAddTask(e: FormEvent){
     e.preventDefault();
     addTask(newTask)
     setNewTask('');
  }

  return (
    <main>

      <span>Você tem {tasks.length} tarefas em aberto</span>

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
