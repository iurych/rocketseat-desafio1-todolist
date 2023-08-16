import { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsPlusCircle } from 'react-icons/bs';
import { TaskBarStyles } from '../styles/taskBarStyles';
import { useState } from 'react';
import { tTask } from '../App';

type tTaskProps = {
  tasks: tTask[];

  setTasks: React.Dispatch<React.SetStateAction<tTask[]>>;
};

export function TaskBar({ setTasks, tasks }: tTaskProps) {
  const [taskValue, setTaskValue] = useState('tarefa padrão');

  const handleCreateNewTodo = (e: FormEvent) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: taskValue,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <TaskBarStyles role='div'>
      <form onSubmit={(e) => handleCreateNewTodo(e)}>
        <input
          type='text'
          placeholder='Adicionar nova tarefa...'
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <button type='submit'>
          Criar
          <BsPlusCircle size={16} />
        </button>
      </form>
    </TaskBarStyles>
  );
}
