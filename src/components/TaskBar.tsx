import { useState, ChangeEvent, FormEvent } from 'react';

import { BsPlusCircle } from 'react-icons/bs';
import { TaskBarStyles } from '../styles/taskBarStyles';

export function TaskBar() {
  const [todo, setNewTodo] = useState([]);

  const handleCreateNewTodo = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleNewTodo = (e: ChangeEvent<HTMLInputElement>) => {
    

    setNewTodo(e.target.value);
  };
  return (
    <TaskBarStyles role='div'>
      <form onSubmit={handleCreateNewTodo}>
        <input
          type='text'
          placeholder='Adicionar nova tarefa...'
          onChange={(e) => handleNewTodo(e)}
        />
        <button type='submit'>
          Criar
          <BsPlusCircle size={16} />
        </button>
      </form>
    </TaskBarStyles>
  );
}
