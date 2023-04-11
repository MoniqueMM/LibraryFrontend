import styled from "styled-components";

export const PrimaryButton = styled.button`
padding: 10px 16px;
  border: 0;
  background-color: gray;
  border-radius: 8px;
  color: black;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    filter: brightness(85%);
  }
`;

export const SecondaryButton = styled.button`
  padding: 10px 16px;
  border: 1 px solid #02075D;
  border-radius: 8px;
  color: black;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-top: 8px;
  margin-right: 8px;
`;