import styled, { css } from 'styled-components';
import { iText } from '../components/Text';

export const StyledChecked = styled.p<iText>`
  padding-inline: 12px;

  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-gray-200);

  ${(props) => {
    switch (props.isCompleted) {
      default:
      case false:
        return css`
          text-decoration: none;
        `;
      case true:
        return css`
          text-decoration: line-through;
        `;
    }
  }}
`;
