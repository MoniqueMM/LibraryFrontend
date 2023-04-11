import { BookDto } from "../../Components/Book/BookDto";

export type CartContextType = {
    books: BookDto[];
    addBook: (book: BookDto) => void;
    removeBook: (book: BookDto) => void;
};
