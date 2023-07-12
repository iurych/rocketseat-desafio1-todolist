import Logo from './assets/Logo.svg';
import { BsPlusCircle } from 'react-icons/bs';
import { Header } from './styles/header';
import { TaskBar } from './styles/taskBar';
import { Main } from './components/Main';

function App() {
  return (
    <>
      <Header>
        <img src={Logo} alt='logo' />
      </Header>
      <TaskBar role='div'>
        <form action=''>
          <input type='text' placeholder='Adicionar nova tarefa...' />
          <button type='submit'>
            Criar
            <BsPlusCircle size={16} />
          </button>
        </form>
      </TaskBar>

      <Main />
    </>
  );
}

export default App;
