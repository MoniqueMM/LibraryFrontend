import { Button, ChakraProvider, list } from "@chakra-ui/react"
import { useState } from "react"
import { AddAuthor } from "./AddAuthor"
import { ShowPage } from "../../Models/Author/showPage"
import { SearchAuthorByName } from "./SearchAuthorByName"
import { UpdateAuthor } from "./UpdateAuthor"
import { ViewAuthors } from "./ViewAuthors"

export const AuthorHomePage = () => {
    
  const [showPage, setShowPage] = useState(ShowPage.list);

  const addAuthorHandler = () =>{
    setShowPage(ShowPage.addAuthor);
  }

  const showListPage = () =>{
    setShowPage(ShowPage.list)
  }

    return(
    <ChakraProvider>
    <div className="AuthorHomePage">
    
    {showPage === ShowPage.list && ( 
      <div>
       <ViewAuthors  />
       {/* <Button colorScheme='teal' onClick={addAuthorHandler}>Add New Author</Button> */}
       </div>
    )}
     
{showPage === ShowPage.addAuthor && <AddAuthor backHandler={showListPage} userName={"Testowy"}/>}
    </div>
  </ChakraProvider>)
}