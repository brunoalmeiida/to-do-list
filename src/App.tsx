import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './global.css';

export interface TaskList {
  id: string;
  title: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskList[]>([]);

  function addNewTask(taskNewTitle: string) {
    setTasks([      
      ...tasks, {
        id: uuidv4(),
        title: taskNewTitle,
        completed: false,
      }
    ])
  }
  
  function deleteTask(idTask: string) {    
    const newTask = tasks.filter((task) => task.id !== idTask);
    setTasks(newTask);
  }
  
  function handleCompletedTask(idTask: string) {
    const newTask = tasks.map((task) => {
      if(task.id === idTask) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      return task;
    });
    setTasks(newTask);
  }

  return (
    <div>     
      <Header onAddNewTask={addNewTask} />
      <Tasks 
        tasks={tasks}      
        onDeleteTask={deleteTask}
        onCheck={handleCompletedTask}
      />
    </div>
  )
}
