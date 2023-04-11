import React, {useContext} from "react";
import SearchContext from "../../Context/SearchContext";
import {ChakraProvider} from "@chakra-ui/react";
import {ItemsContainer, StoreContainer} from "./AllBooks.styles";
import {Header} from "../Author/ViewAuthors.style";




export const OtherBooks = () => {
    const{books} = useContext(SearchContext)




    return (
        <ChakraProvider>
            <StoreContainer>
                <Header><h3></h3></Header>
                    <>
                        <ItemsContainer>
                            {books?.map((x) => (
                                <OtherBooks />
                            ))}
                        </ItemsContainer>
                    </>

            </StoreContainer>
        </ChakraProvider>
    );













}