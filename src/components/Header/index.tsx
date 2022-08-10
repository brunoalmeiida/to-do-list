import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import styles from './header.module.css';

interface Props {
    onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        onAddTask(title);
        setTitle("");
    }

    function onchangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={Logo} />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    placeholder='Adicione uma nova tarefa' 
                    onChange={onchangeTitle}
                    value={title} />
                <button>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </header>
    );
}