
import { create } from "zustand"

type Task = {
  id: string | number;
  text: string;
}


type TaskStore = {
  tasks: Task[];
  addTask: (text: string) => void;
  editTask: (id: string | number, text: string) => void;
  removeTask: (id: string | number) => void;
}


export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (text) => set((state)=>({
    tasks: [...state.tasks, {id: Date.now(),  text: text }]
  })),
  editTask: (id, text) => set((state) => ({
    tasks: state.tasks.map( item => item.id === id ? {...item, text: text}: item)
  })),
  removeTask: (id) => set((state) => ({
    tasks: state.tasks.filter(item => item.id !== id)
  }))
}))