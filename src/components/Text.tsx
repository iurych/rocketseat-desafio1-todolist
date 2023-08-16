import { StyledChecked } from '../styles/text';

export interface iText {
  isCompleted: boolean;
  title?: string;
}

export const Text = ({ isCompleted, title }: iText) => {
  return <StyledChecked isCompleted={isCompleted}> {title} </StyledChecked>;
};
