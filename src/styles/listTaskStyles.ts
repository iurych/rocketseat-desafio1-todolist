import { styled } from 'styled-components';

export const ListTaksStyles = styled.li`
  min-width: 736px;
  height: 72px;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-gray-500);

  .CheckboxRoot {
    background-color: transparent;
    border: 1px solid var(--color-blue);

    width: 24px;
    height: 24px;
    border-radius: 50%;

    box-shadow: 0 1px 5px var(--color-blue);
  }

  .CheckboxRoot:hover {
    background-color: var(--color-blue-dark);
    opacity: 0.2;
  }

  .CheckboxIndicator {
    color: var(--color-gray-200);
  }

  img:hover {
    cursor: pointer;
  }
`;
