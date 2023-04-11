import { BookDto } from "../../Components/Book/BookDto";

export type SearchContextType = {
    books: BookDto[]
    setBooks:(books :BookDto[])=> void
}