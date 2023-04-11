import {
  Box,
  Input,
  List,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { debounce } from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AuthorApi } from "../../Api/AuthorApi";
import Author from "../../Models/Author/Author";

import { minCharToSearch } from "./constants";

export const SearchAuthorByName = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); //stan to jest takie pole prywatne gettery i settery razem
  const [suggestions, setSuggestions] = useState<Author[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]); //domyślna wartośc stanu // dodanie czego po czym będziemy iterować

  // const searchAuthors = () => {
  //     console.log(searchTerm)
  // } to opakowane niżej w useCallBack

  // const debouncedSearch = debounce(searchAuthors, 2000) // pierwsze to jest to co chcemy opóźnić , odrugie o ile tutaj jest taki problem, że wywołania sobie czekają i odpalają się wszystkie na raz po 2 s

  //useCallback-> nie przytrzymuje wartości tylko obiekt funkcji funkcja nie zostanie przeładowana przy rerenderze, ale przy wywołaniu będzie przechodzić cała logika (ciało funkcji)
  //useMemo przechowuje wartość - będzie wypluwać to samo dopóki coś w tablicy zależności się nie zmieni

  const searchAuthors = useCallback(async (term: string) => {
    const result = await AuthorApi.getAuthorsByName(term);
    setAuthors(result.data);
    setSuggestions(result.data);

    // to do handle result
  }, []);

  const debouncedSearch = useMemo(
    () => debounce((term: string) => searchAuthors(term), 1300),
    [searchAuthors]
  ); // parametrem wejściowym funkcji jest słowo wyszukiwane czyli term

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // tu zgarniamy to co się pojawiło w inpucie
    // wywołanie podmiany wartości zmiennej
    setSearchTerm(event.currentTarget.value);
  };

  useEffect(() => {
    // w momencie odpalania hook chcemy odpalać metodą szukania
    // nie ma sensu żeby odpalał się po zamontowaniu i gdy jest pusta wartość (jeżeli nie jest pusty)
    if (searchTerm && searchTerm.length > minCharToSearch) {
      debouncedSearch(searchTerm);
    }
  }, [searchTerm, debouncedSearch]); // za każdym razem gdy się zmienia

  return (
    <div>
      <div></div>
      <Input
        type="text"
        value={searchTerm} // two way tu jest wyświetlany stan
        placeholder="Podaj imię autora"
        onChange={onSearchChange}
      />

      <Box>
        <List>
          {suggestions.map((suggestions) => (
            <ListItem>{suggestions.name}</ListItem>
          ))}
        </List>
      </Box>
      
      <TableContainer
        width={"50%"}
        marginLeft={"auto"}
        marginRight={"auto"}
        paddingTop={"5%"}
      >
        <Table backgroundColor={"teal"} borderRadius={"5px"} colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Author name</Th>
              <Th>Date of birth</Th>
              <Th> Rating </Th>
              {/* <Th>Action</Th>
              <Th>Action</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {authors.map((author) => (
              <Tr key={author.id}>
                <Td>{author.name}</Td>
                <Td>{author.dateOfBirth}</Td>
                <Td>{author.rating}</Td>
                {/* <Td><Button colorScheme='teal'onClick={handleEdit} >Edit</Button></Td>
                
                <Td><Button colorScheme='red'>Delete</Button></Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div> /// podpinamy onChange z metodą
  );
};
