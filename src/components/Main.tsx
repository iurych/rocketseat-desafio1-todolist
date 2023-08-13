import { tTask } from '../App';
import { MainStyled } from '../styles/main';
import { EmptyTask } from './Empty';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';

interface iMainProps {
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: Array<tTask>;
  checked: boolean;
}

export function Main({ tasks, setChecked, checked }: iMainProps) {
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
                checked={checked}
                setChecked={setChecked}
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
