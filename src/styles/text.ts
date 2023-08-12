import { styled, css } from 'styled-components';
import { iCheckProps } from '../components/Text';

export const StyledChecked = styled.p<iCheckProps>`
  padding-inline: 12px;

  font-size: 0.875rem;
  font-weight: 400;
  color: var(--color-gray-200);

  ${({ variant }) => {
    switch (variant) {
      case 'checked':
        return css`
          text-decoration: line-through;
        `;
      case 'unchecked':
        return css`
          text-decoration: none;
        `;
    }
  }}
`;
