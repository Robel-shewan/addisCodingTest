import styled from "styled-components";

export const Spinner = styled.div`
  border: 16px solid pink;
  border-top: 16px deeppink solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  margin: auto;

  animation: spin 2s linear infinite;
  /* 
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite; */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
