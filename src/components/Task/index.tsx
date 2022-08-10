import { CheckCircle, Trash } from 'phosphor-react';
import { ITask } from '../../App';
import styles from './task.module.css';

interface Props {
    task: ITask;
    onDelete: (taskID: string) => void;
    onComplete: (taskID: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
    return (
        <div className={styles.task}>
            <button 
                className={styles.checkContainer}
                onClick={() => onComplete(task.id)}
            >
                {task.isCompleted ? <CheckCircle /> : <div/>}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>
               {task.title}
            </p>
            <button 
                key={task.id}
                className={styles.deleteButton} 
                onClick={() => onDelete(task.id)}
            >
                <Trash size={20} />
            </button>
        </div>
    )
}