import { ClipboardText } from 'phosphor-react';
import { TaskList } from '../App';
import { Task } from './Task';
import styles from './Tasks.module.css';

interface TasksProps {
    tasks: TaskList[];
    onDeleteTask: (idTask: string) => void;
    onCheck: (idTask: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onCheck }: TasksProps) { 
    const tasksQuantity = tasks.length;
    const completedTask = tasks.filter(task => task.completed).length;

    return (
        <div className={styles.tasks}>
            <div className={styles.info}>
                                
                <div className={styles.created}>
                    <p>Tarefas criadas</p>                    
                    <span>{tasksQuantity}</span>
                </div>

                <div className={styles.done}>
                    <p>Concluídas</p>

                    <span>{completedTask} de {tasksQuantity}</span>
                </div>
            </div>

            <div className={styles.list}>
                {tasks.map(task => {
                    return (
                        <Task 
                            key={task.id} 
                            task={task} 
                            onDeleteTask={onDeleteTask}
                            onCheck={onCheck}
                        />
                    )
                })}

                {tasks.length <= 0 && (
                    <div className={styles.empty}>
                        <ClipboardText size={56} color="#808080" />
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                )}
            </div>
        </div>
    )
}