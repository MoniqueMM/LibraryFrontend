import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  TableContainer,
  Input,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Container,
  Box,
  ChakraProvider,
} from "@chakra-ui/react";
import "../../Models/Author/Author";
import { AuthorApi } from "../../Api/AuthorApi";
import { AuthorInput, AuthorsContainer, Header, ItemsAuthorContainer } from "./ViewAuthors.style";
import { AuthorDto } from "./AuthorDto";
import { Author } from "./Author";





export const ViewAuthors = () => {
  const [authors, setAuthors] = useState<AuthorDto[]>([]); //domyślna wartośc stanu // dodanie czego po czym będziemy iterować
  const [search, setSearch] = useState("");

  useEffect(() => {
    // z racji tego że hook useEffect może zwracać tylko funkcję czyszczącą lub nic to tworzymy nową funkcję
    loadAuthors(); // tu musimy zawołać tą funkcję
  }, []);

  const loadAuthors = async () => {
    const result = await AuthorApi.getAuthors();
    setAuthors(
      result.data.map((author) => {
        return {
          ...author,
          src: `${process.env.PUBLIC_URL}/Images/Authors/${author.id}.jpeg`,
        };
      })
    );
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // tu zgarniamy to co się pojawiło w inpucie
    // wywołanie podmiany wartości zmiennej
    setSearch(event.target.value);
  };

  useEffect(() =>{
    if(search.length > 0 ){
      const filteredAuthors = authors.filter((authors)=> 
      authors.name.toLocaleLowerCase().includes(search.toLowerCase())
      );
      setAuthors(filteredAuthors);
    }else loadAuthors();
  }, [search])

  return (
      <ChakraProvider>
        <AuthorsContainer>
          <AuthorInput
          type="text"
          placeholder="Podaj imię autora"
          onChange={onSearchChange}
          />
          <Header><h1>Zapoznaj się z autorami</h1></Header>
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


    // <div>
    //   <div id="authorSearch">
    //     <Input
    //       type="text"
    //       placeholder="Podaj imię autora"
    //       onChange={onSearchChange}
    //     />
    //   </div>

    //   <div id="mainContainer">
    //     {authors
    //       .filter((author) => {
    //         return search.toLowerCase() === ""
    //           ? author
    //           : author.name.toLocaleLowerCase().includes(search);
    //       })
    //       .map((author) => (
    //         <>
    //           <SimpleGrid id="smallContainer">
    //             <Card key={author.id} id="card">
    //               <CardHeader>
    //                 <Heading size="md">{author.name}</Heading>
    //               </CardHeader>
    //               <CardBody id="cardBody">
    //                 <Text>{author.description}</Text>
    //               </CardBody>
    //               <Box className="imgBox">
    //                 <ItemPhoto
    //                   className="img"
    //                   src={author.src}
    //                   alt={"Author"}
    //                 />
    //               </Box>
    //               <CardFooter>
    //                 <Button>View here</Button>
    //               </CardFooter>
    //             </Card>
    //           </SimpleGrid>
    //         </>
    //       ))}
    //   </div>
    // </div>
  );
};
