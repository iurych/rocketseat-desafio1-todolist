import { ListTaksStyles } from '../styles/listTaskStyles';
import trash from '../assets/trash.svg';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { MouseEvent, useState } from 'react';
import { Text } from './Text';

export function Task() {
  const [isCheck, setIsCheck] = useState<string | undefined>('checked');

  const handleClickTask = (e: MouseEvent<HTMLButtonElement>) => {
    const checker = e.target as HTMLElement;
    const newValue = checker.dataset.state;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    setIsCheck(newValue);
  };

  return (
    <ListTaksStyles>
      <Checkbox.Root
        className='CheckboxRoot'
        id='c1'
        onClick={(e) => handleClickTask(e)}
      >
        <Checkbox.Indicator className='CheckboxIndicator'>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <Text isCheck={isCheck} />

      <img src={trash} alt='trash' />
    </ListTaksStyles>
  );
}
