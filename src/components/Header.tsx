import Logo from '../assets/logo.svg';
import { PlusCircle } from 'phosphor-react';

import styles from './Header.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddNewTask: (taskNewTitle: string) => void;
}

export function Header({ onAddNewTask } : Props) {
    const [list, setList] = useState("");

    function handleAddNewTaskForm(event: FormEvent) {
        event.preventDefault();
        onAddNewTask(list);
        setList("");
    }
   
    function onChangeList(event: ChangeEvent<HTMLInputElement>) {
        setList(event.target.value);
    }

    return (
        <div className={styles.header}>
            <img src={Logo} alt="Logotipo To Do List" />
            
            <form onSubmit={handleAddNewTaskForm} className={styles.formTask}>
                <input 
                    className={styles.inputTask} 
                    type="text" 
                    placeholder='Adicione uma nova tarefa' 
                    onChange={onChangeList}
                    value={list}
                />

                <button className={styles.buttonTask}>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </div>
    )
}