import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Thumbnail = styled.img`
  height: 120px;
  width: 100px;
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const Amount = styled.span`
  font-size: 20px;
`;



export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;

export const RemoveItem = styled.button`
    background-color: transparent;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 16px;
    color: black;
    border: 1px solid black;
    cursor: pointer;
`