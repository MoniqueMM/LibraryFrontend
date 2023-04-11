import React, {useContext, useEffect, useState} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import {SearchDrawerContainer} from "./SearchDrawer.styles";
import {ChakraProvider, Input, Select, SelectProps} from "@chakra-ui/react";
import {Genres} from "../../Const/Genres";
import {AuthorApi} from "../../Api/AuthorApi";
import {AuthorDto} from "../Author/AuthorDto";
import {BookApi} from "../../Api/BookApi";
import {SecondaryButton} from "../GlobalStyle";

import SearchContext from "../../Context/SearchContext";
interface SearchDrawerProps {
    isSearchDrawerOpen: boolean;
    toggleSearchDrawer: () => void;
}

export const SearchDrawer = (props: SearchDrawerProps) => {
    const [authors,setAuthors] = useState<AuthorDto[]>([])
    const{setBooks}=useContext(SearchContext)
    const[searchedAuthor, setSearchAuthor] = useState("")
    const [searchedGenre,setSearchGenre] = useState("")

    useEffect(() => {
        loadAuthors();
    }, []);



    const loadAuthors = async () => {
        const result = await AuthorApi.getAuthors();
        setAuthors(
            result.data);
    };

        const loadBooksByAuthor = async () => {
            const byAuthor = await BookApi.getBooksByAuthor(searchedAuthor);
            setBooks(
                byAuthor.data)
            console.log(byAuthor.data)
        }

    const loadBooksByGenre = async () => {
        const byAuthor = await BookApi.getBooksByGenre(searchedGenre);
        setBooks(
            byAuthor.data)
    }


    const onContentChanged =(e: React.ChangeEvent<HTMLSelectElement>)=>{
        setSearchAuthor (() => {
            return (e.target.value)
        });
    };


    return (
        <Drawer
            size={300}
            open={props.isSearchDrawerOpen}
            onClose={props.toggleSearchDrawer}
            direction="left"

        >
            <>
                <ChakraProvider>
                <SearchDrawerContainer>
                    <span>Wybierz gatunek</span>
                    <Select
                        variant='outline'
                        size='md'
                    onChange={(event) =>{
                    setSearchGenre(event.target.value)}
                    }>
                        {Object.values(Genres).map ( genres =>
                            <option key={genres} value={genres}>{genres}</option>)}
                    </Select>
                    <span>Wybierz autora</span>
                    <Select
                        typeof='string'
                        onChange={onContentChanged}

                        size='md'
                    variant='outline'>
                        {authors.map(a=>
                            <option value={a.id} key={a.id} >{a.name}</option> )}
                    </Select>
                    <SecondaryButton onClick={loadBooksByAuthor}>Szukaj</SecondaryButton>

                </SearchDrawerContainer>
                </ChakraProvider>
            </>
        </Drawer>
    );
};
