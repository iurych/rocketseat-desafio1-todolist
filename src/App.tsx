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
  const [done, setDone] = useState(0);

  return (
    <>
      <Header />
      <TaskBar tasks={tasks} setTasks={setTasks} />
      <Main tasks={tasks} setTasks={setTasks} setDone={setDone} done={done} />
    </>
  );
}

export default App;
