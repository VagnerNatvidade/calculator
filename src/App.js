import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 23rem;
  padding: 2.4rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE_700};
  border-radius: 0.8rem;

  .display,
  .complete-operation {
    width: 100%;
    height: 48px;
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 0.8rem;
    text-align: right;
    overflow: auto;
    background: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .display::-webkit-scrollbar,
  .complete-operation::-webkit-scrollbar {
    display: none;
  }

  .complete-operation {
    height: 32px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.COLORS.BLUE_700};
  }

  button:hover {
    filter: brightness(1.1);
  }
`;
