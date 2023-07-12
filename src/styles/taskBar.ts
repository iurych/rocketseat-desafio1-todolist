import { styled } from 'styled-components';

export const TaskBar = styled.div`
  position: absolute;
  top: 182px;
  left: calc((100% - 736px) / 2);

  width: 736px;
  height: 54px;

  form {
    display: flex;
    justify-content: space-between;

    input {
      width: 638px;
      height: 54px;

      background-color: var(--color-gray-500);

      color: var(--color-gray-300);

      font-size: 1rem;
      font-weight: 400;
      line-height: 25%;

      padding: 1rem;

      border: none;
      border-radius: 1rem;

      &:focus {
        border: 1px solid var(--color-purpledark);
      }

      &::placeholder {
        background-image: linear-gradient(
          to right,
          #8284fa,
          #5e60ce,
          #4ea8de,
          #1d6e9f
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
    }

    button {
      width: 90px;
      height: 52px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      font-size: 0.875rem;
      font-weight: 700;

      color: var(--color-gray-100);

      border-radius: 8px;
      border: none;

      background-color: var(--color-blue-dark);

      transition: 0.7s;

      &:hover {
        background-color: var(--color-blue);
      }
    }
  }
`;
