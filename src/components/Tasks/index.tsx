import { ClipboardText } from 'phosphor-react';
import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './tasks.module.css';

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{taskQuantity}</span>
                </div>

                <div className={styles.textPurple}>
                    <p>Concluídas</p>
                    <span>{completedTasks} de {taskQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                ))}

                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <ClipboardText size={80} />
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus items a fazer</span>
                    </section>
                )}
            </div>
        </section>
    )
}