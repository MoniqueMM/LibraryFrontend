import React, { createContext, useState } from "react";
import { CartContextType } from "../Models/Book/CartContextType";
import {BookDto} from "../Components/Book/BookDto";

const defaultSettings: CartContextType = {
    books: [],
    addBook: (book: BookDto) => {},
    removeBook: (book: BookDto) => {},
};

export const CartContext = createContext<CartContextType>(defaultSettings);

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
    const [books, setBooks] = useState<BookDto[]>([]);

    const addBook = (book: BookDto) => {
        setBooks([...books, book]);
    };

    const removeBook = (book: BookDto) => {
        const otherBooks = books.filter((x) => x.id !== book.id);
        const booksAfterRemove = books.filter((x) => x.id === book.id);
        booksAfterRemove.pop();

        setBooks([...otherBooks, ...booksAfterRemove]);
    };


    return (
        <CartContext.Provider value={{ books, addBook, removeBook }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
