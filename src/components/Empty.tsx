import CliBoard from '../assets/Clipboard.svg';
import { StyledEmptyTask } from '../styles/emptyStyles';

export const EmptyTask = () => {
  return (
    <StyledEmptyTask>
      <figure>
        <img src={CliBoard} alt='' />
      </figure>
      <p>
        {' '}
        Você ainda não tem tarefas cadastradas <br /> Crie tarefas e organize
        seus itens a fazer{' '}
      </p>
      ;
    </StyledEmptyTask>
  );
};
