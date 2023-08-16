import { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsPlusCircle } from 'react-icons/bs';
import { TaskBarStyles } from '../styles/taskBarStyles';
import { useState, ChangeEvent, useRef } from 'react';
import { tTask } from '../App';

type tTaskProps = {
  tasks: tTask[];

  setTasks: React.Dispatch<React.SetStateAction<tTask[]>>;
};

export function TaskBar({ setTasks, tasks }: tTaskProps) {
  const [taskValue, setTaskValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCreateNewTodo = (e: FormEvent) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: taskValue,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
    if (inputRef.current) {
      inputRef.current.value = '';
      setTaskValue('');
    }
  };

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.target.value);
  };

  return (
    <TaskBarStyles role='div'>
      <form onSubmit={(e) => handleCreateNewTodo(e)}>
        <input
          type='text'
          ref={inputRef}
          defaultValue=''
          placeholder='Adicionar nova tarefa...'
          onChange={(e) => handleInputValue(e)}
        />
        <button disabled={taskValue === '' ? true : false} type='submit'>
          Criar
          <BsPlusCircle size={16} />
        </button>
      </form>
    </TaskBarStyles>
  );
}
