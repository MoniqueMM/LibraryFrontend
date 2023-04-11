import { Link, Outlet } from "react-router-dom";
import AccountIcon from "../../icons/AccountIcon";
import CartIcon from "../../icons/CartIcon";
import DrawerContext from "../../Context/DrawerContext";
import React, { useContext } from "react";
import{NavbarContainer,NavbarLinks,NavbarIcons,NavbarLibrary,NavbarBook,NavbarAuthor} from "./NavbarStyle";
import SearchIcon from "../../icons/SearchIcon";



export const  Navbar = () => {
  const { toggleCartDrawer, toggleProfileDrawer,toggleSearchDrawer } = useContext(DrawerContext);

  return (
  <>
    <NavbarContainer>
      <NavbarLinks>

      <NavbarLibrary className ="Library"to ={"/"}>Nowoczesna Biblioteka</NavbarLibrary>
      <NavbarBook className ="Book"to ={"/Book"}>Książki</NavbarBook>
     
       <NavbarAuthor className ="Author"to ={"/AuthorHomePage"}>Autorzy</NavbarAuthor>
      
       </NavbarLinks>
   
      <NavbarIcons>
          <SearchIcon style={{ cursor: "pointer" }} onClick={toggleSearchDrawer}/>
          <CartIcon style={{ cursor: "pointer" }} onClick={toggleCartDrawer} />
      <AccountIcon style={{ cursor: "pointer" }} 
         onClick={toggleProfileDrawer}/>
           </NavbarIcons>
        
         </NavbarContainer>
    <Outlet/>
    </>
  
  );
};
