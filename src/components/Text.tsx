import { StyledChecked } from '../styles/text';

export interface iCheck {
  isCheck?: string;
}

export interface iCheckProps extends iCheck {
  variant: string;
}

export const Text = ({ isCheck }: iCheck) => {
  return (
    <>
      <StyledChecked
        isCheck={isCheck}
        variant={isCheck === 'checked' ? 'unchecked' : 'checked'}
      >
        {' '}
        checado{' '}
      </StyledChecked>
    </>
  );
};
