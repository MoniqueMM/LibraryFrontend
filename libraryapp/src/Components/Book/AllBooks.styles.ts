import styled from "styled-components";

export const StoreContainer = styled.div`
  text-align: center;
`;

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,300px);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 32px 64px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  padding-bottom: 32px;
`