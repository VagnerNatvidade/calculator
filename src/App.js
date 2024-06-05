import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 18rem;
  padding: 0.8rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.BLUE_100};

  .display,
  .complete-operation {
    width: 100%;
    margin-bottom: 10px;
    padding: .5rem;
    border-radius: 0.8rem;
    text-align: right;
    overflow: auto;
  }

  .display {
    height: 3.8rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .complete-operation {
    height: 2.4rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .display::-webkit-scrollbar,
  .complete-operation::-webkit-scrollbar {
    display: none;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;
  }

  button {
    padding: 1rem;
    border: none;
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.COLORS.BLUE_700};
  }

  button:hover {
    filter: brightness(1.1);
  }
`;
