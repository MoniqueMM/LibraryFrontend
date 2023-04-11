import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 width: 100%;
 height: 100%;
`;

export const StyledHeading = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin-top: 32px;
  padding-bottom: 25px;
  margin-bottom: 8px;
  z-index: 1;
  color:white;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 20rem;
  position:relative;
  z-index: 1;
  width: 100%;
  height: 100%;
 
  
`;

export const LoginInput = styled.input`
  padding: 6px 12px;
  font-size: 18px;
  border-radius: 15px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
  border-radius: 17px;
`;

export const LoginButton = styled.button`
  padding: 16px;
  border: 0;
  background-color: #24a0ed;
  border-radius: 17px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    color: #666666;
  }
  &:hover {
    filter: brightness(85%);
  }
  `;

export const ValidationError = styled.span`
  color: red;
  font-size: 13px;
  `

export const StyleDrawinglibrary =styled.div`
position: relative;
justify-content: center;
align-items: center;
width:100%;
height:100%;
z-index: 0;
`
export const RegisterLink = styled.input`

`