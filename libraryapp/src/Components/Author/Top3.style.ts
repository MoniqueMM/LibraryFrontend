import styled from "styled-components"


export const AuthorsContainer = styled.div`
text-align: center;`;


export const ItemsAuthorContainer = styled.div`
justify-self: center;
display: grid;
grid-template-columns: repeat(auto-fill,300px);
grid-column-gap: 32px;
grid-row-gap: 32px;
padding: 32px 64px;
`;

export const Header  = styled.h1`
font-size: 48px;
text-align: center;
padding-top: 5vh;
padding-bottom: 5vh;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-style: italic;
color: rgba(16, 16, 16, 0.853);
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,300px);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 32px 64px;
`;

export const StoreContainer = styled.div`
  text-align: center;
`;