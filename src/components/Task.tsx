import { Trash, CheckCircle } from 'phosphor-react';
import { TaskList } from '../App';

import styles from './Task.module.css';

interface TaskProps {
    task: TaskList;
    onDeleteTask: (idTask: string) => void;    
    onCheck: (idTask: string) => void;
}

export function Task({ task, onDeleteTask, onCheck }: TaskProps) {
    return (
        <div className={styles.task}>
            <button className={styles.check} onClick={() => onCheck(task.id)}>
                {task.completed ? <CheckCircle size={20} color="#8284FA" /> : <div/>}
            </button>

            <p className={task.completed ? styles.completed : ""}>{task.title}</p>

            <button className={styles.trash} onClick={() => onDeleteTask(task.id)}>
                <Trash size={20} />
            </button>
        </div>
    )
}