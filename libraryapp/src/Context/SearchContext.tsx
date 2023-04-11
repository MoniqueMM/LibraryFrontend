import React, { createContext, useState } from "react";
import { CartContextType } from "../Models/Book/CartContextType";
import {BookDto} from "../Components/Book/BookDto";
import {SearchContextType} from "../Models/Book/SearchContextType";

const defaultSettings: SearchContextType = {
    books: [],
    setBooks: (book: BookDto[]) => {},
};

export const SearchContext = createContext<SearchContextType>(defaultSettings);

export const SearchContextProvider = ({ children }: React.PropsWithChildren) => {
    const [books, setBooks] = useState<BookDto[]>([]);






    return (
        <SearchContext.Provider value={{books,setBooks}}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;
