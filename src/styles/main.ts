import { styled } from 'styled-components';

export const MainStyled = styled.main`
  height: calc((100% - 212px));
  width: 100%;

  padding-inline: calc((100% - 736px) / 2);

  display: flex;

  flex-direction: column;
  align-items: center;
  padding-top: 132px;

  header {
    min-width: 737px;
    display: flex;
    justify-content: space-between;

    div {
      min-width: fit-content;

      display: flex;
      gap: 10px;

      p {
        font-weight: 700;
        font-size: 0.875rem;
      }
      .blue_completed {
        color: var(--color-blue);
      }

      .purple_completed {
        color: var(--color-purple);
      }

      div {
        background-color: var(--color-gray-400);

        border-radius: 50%;

        width: 25px;
        height: 20px;

        align-items: center;
        padding-inline: 7px;
      }

      span {
        color: var(--color-gray-200);
      }
    }
  }

  .box-tasks {
    display: flex;
    align-items: center;
    justify-content: center;

    height: auto;
    width: inherit;

    margin-top: 20px;

    border-top: solid 1px var(--color-gray-400);
    border-radius: var(--base-radius);

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .empty-task {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin-top: 100px;

      picture {
        margin: 16px 0px;
      }

      p,
      span {
        color: var(--color-gray-300);
      }

      p {
        font-weight: 700;
      }

      span {
        font-weight: 400;
      }
    }
  }
`;
