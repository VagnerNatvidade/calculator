import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin: 0 auto;

  .display,
  .complete-operation {
    width: 100%;
    height: 48px;
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 5px;
    text-align: right;
    overflow: auto;
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
  }
`;
