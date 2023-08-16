import { tTask } from '../App';
import { MainStyled } from '../styles/main';
import { EmptyTask } from './Empty';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';

interface iMainProps {
  tasks: Array<tTask>;
  setTasks: React.Dispatch<React.SetStateAction<tTask[]>>;
}

export function Main({ tasks, setTasks }: iMainProps) {
  return (
    <MainStyled>
      <header>
        <div>
          <p className='blue_completed'>tarefas criadas</p>
          <div>
            <span>0</span>
          </div>
        </div>
        <div>
          <p className='purple_completed'>concluídas</p>
          <div>
            <span>0</span>
          </div>
        </div>
      </header>
      <div className='box-tasks'>
        <ul>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={uuidv4()}
                title={task.title}
                isCompleted={task.isCompleted}
                id={(task.id = uuidv4())}
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
