import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { AuthorApi } from "../../Api/AuthorApi";
import { Author } from "./Author";
import { AuthorDto } from "./AuthorDto";
import { AuthorsContainer, Header, ItemsAuthorContainer } from "./Top3.style";



export const Top3Authors = () => {

    const [authors, setAuthors] = useState<AuthorDto[]>([]); //domyślna wartośc stanu // dodanie czego po czym będziemy iterować

    useEffect(() => {
      loadAuthors(); 
    }, []);
  
    const loadAuthors = async () => {
      const result = await AuthorApi.top3();
      setAuthors(result.data.map((author) =>{
        return{
          ...author,
          src:`${process.env.PUBLIC_URL}/Images/Authors/${author.id}.jpeg`,
        }
      }));
    };


    return(
      <ChakraProvider>
        <AuthorsContainer>
          <Header><h1>Zobacz nasze Top 3 wśród autorów!</h1></Header>
          {authors.length > 0 ? (
          <>
            <ItemsAuthorContainer>
              {authors?.map((x) => (
                <Author author={x} />
              ))}
            </ItemsAuthorContainer>
          </>
        ) : (
          <h2>Aktualnie lista autorów jest niedostępna. Zapraszamy później</h2>
        )}
        </AuthorsContainer>




      </ChakraProvider>
    )
}