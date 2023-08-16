import { ListTaksStyles } from '../styles/listTaskStyles';
import trash from '../assets/trash.svg';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Text } from './Text';
import { useState } from 'react';

interface iTaskProps {
  isCompleted: boolean;
  title?: string;
  id: string;
}

export function Task({ isCompleted, title, id }: iTaskProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleOnChecked = (value: boolean) => {
    isCompleted = value;

    setChecked(value);
  };

  return (
    <ListTaksStyles id={id}>
      <Checkbox.Root
        className='CheckboxRoot'
        id='c1'
        checked={checked}
        onCheckedChange={(value) => handleOnChecked(value as boolean)}
      >
        <Checkbox.Indicator className='CheckboxIndicator'>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <Text isCompleted={isCompleted} title={title} />

      <img src={trash} alt='trash' />
    </ListTaksStyles>
  );
}
