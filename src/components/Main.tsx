import { MainStyled } from '../styles/main';
import Clipboard from '../assets/Clipboard.svg';
import { Task } from './Task';

export function Main() {
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
          <Task />
        </ul>
      </div>
    </MainStyled>
  );
}
