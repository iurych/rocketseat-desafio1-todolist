import { tTask } from '../App';
import { MainStyled } from '../styles/main';
import { EmptyTask } from './Empty';
import { Task } from './Task';
import { useEffect, useState } from 'react';

interface iMainProps {
  tasks: Array<tTask>;
  setTasks: React.Dispatch<React.SetStateAction<tTask[]>>;
  setDone: React.Dispatch<React.SetStateAction<number>>;
  done: number;
}

export function Main({ tasks, setTasks, done, setDone }: iMainProps) {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    (() => {
      const amountTask = tasks.length;
      setAmount(amountTask);
    })();
  }, [tasks, done]);

  return (
    <MainStyled>
      <header>
        <div>
          <p className='blue_completed'>tarefas criadas</p>
          <div>
            <span>{amount}</span>
          </div>
        </div>
        <div>
          <p className='purple_completed'>concluídas</p>
          <div>
            {amount > 0 ? (
              <span>
                {' '}
                {done} de {amount}{' '}
              </span>
            ) : (
              <span> {amount} </span>
            )}
          </div>
        </div>
      </header>
      <div className='box-tasks'>
        <ul>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                title={task.title}
                isCompleted={task.isCompleted}
                id={task.id}
                tasks={tasks}
                setTasks={setTasks}
                setDone={setDone}
                done={done}
              />
            ))
          ) : (
            <EmptyTask />
          )}
        </ul>
      </div>
    </MainStyled>
  );
}
