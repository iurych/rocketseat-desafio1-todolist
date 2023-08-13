import { Header } from './components/Header';
import { Main } from './components/Main';
import { TaskBar } from './components/TaskBar';
import { useState } from 'react';

export type tTask = {
  id: string;
  title?: string;
  isCompleted: boolean;
};

function App() {
  
  const [tasks, setTasks] = useState<tTask[]>([]);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Header />
      <TaskBar tasks={tasks} setTasks={setTasks} checked={checked} />
      <Main tasks={tasks} checked={checked} setChecked={setChecked} />
    </>
  );
}

export default App;
