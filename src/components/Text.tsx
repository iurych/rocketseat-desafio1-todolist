import { StyledChecked } from '../styles/text';

export interface iText {
  checked: boolean;
  title?: string;
}

export const Text = ({ checked, title }: iText) => (
  <StyledChecked checked={checked}> {title} </StyledChecked>
);
