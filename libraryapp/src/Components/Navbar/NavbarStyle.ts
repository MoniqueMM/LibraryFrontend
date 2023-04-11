import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
  background: white;
//background:linear-gradient(to left, rgba(5, 91, 152, 0.455), rgb(50, 85, 241));
width: 100%;
height: 100px;
  text-decoration: none;
  border-bottom: solid black 3px;


`
export const NavbarLinks= styled.div`
display: flex;
flex-direction: row;
gap: 16px;
text-decoration: none;

`
export const NavbarLibrary= styled(Link)`
    text-decoration: none;
    color: black;
    margin-left: 25px;
    font-weight: bold;
    font-size: 22px;
   
`
export const NavbarBook= styled(Link)`
    text-decoration: none;
    color: black;
    margin-left: 25px;
    font-weight: bold;
    font-size: 22px;
   
`
export const NavbarAuthor= styled(Link)`
    text-decoration: none;
    color: black;
    margin-left: 25px;
    font-weight: bold;
    font-size: 22px;
   
`
export const NavbarIcons= styled.div`
display: flex;
flex-direction: row;
gap: 16px;
margin-right: 25px;
`