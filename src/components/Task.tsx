import { ListTaksStyles } from '../styles/listTaskStyles';
import trash from '../assets/trash.svg';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { Text } from './Text';
import { v4 as uuidv4 } from 'uuid';


interface iTaskProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
}

export function Task({ checked, setChecked, title }: iTaskProps) {
  const handleonChecked = () => {
    setChecked(!checked);
  };

  return (
    <ListTaksStyles id={uuidv4()}>
      <Checkbox.Root
        className='CheckboxRoot'
        id='c1'
        onCheckedChange={handleonChecked}
      >
        <Checkbox.Indicator className='CheckboxIndicator'>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <Text checked={checked} title={title} />

      <img src={trash} alt='trash' />
    </ListTaksStyles>
  );
}
