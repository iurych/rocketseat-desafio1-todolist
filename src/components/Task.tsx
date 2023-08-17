import { ListTaksStyles, TrashIcon } from '../styles/listTaskStyles';
import trash from '../assets/trash.svg';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Text } from './Text';
import { useState, MouseEvent } from 'react';
import { tTask } from '../App';

interface iTaskProps {
  isCompleted: boolean;
  title?: string;
  id: string;
  tasks: tTask[];
  setTasks: React.Dispatch<React.SetStateAction<tTask[]>>;
  setDone: React.Dispatch<React.SetStateAction<number>>;
  done: number;
}

export function Task({
  title,
  id,
  tasks,
  setTasks,
  setDone,
}: // done,
iTaskProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleOnChecked = (value: boolean | string) => {
    value ? setDone((prev) => ++prev) : setDone((prev) => --prev);

    setChecked(value as boolean);
  };

  const remove = () => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks([...remainingTasks]);

    checked && setDone((prev) => --prev);
  };

  return (
    <ListTaksStyles id={id}>
      <Checkbox.Root
        className='CheckboxRoot'
        id='c1'
        checked={checked}
        onCheckedChange={(value) => handleOnChecked(value)}
      >
        <Checkbox.Indicator className='CheckboxIndicator'>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <Text isCompleted={checked} title={title} />

      <TrashIcon onClick={remove} />
    </ListTaksStyles>
  );
}
