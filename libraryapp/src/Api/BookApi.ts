import { bookApi } from "../Hooks/useAxios";
import Book from "../Models/Author/Book";
import {BookDto} from "../Components/Book/BookDto";

export class BookApi{
    static top3Books =async () => 
    await bookApi.get<BookDto[]>("/books/topBook")

    static allBooks = async () =>
        await bookApi.get<BookDto[]>("/books")

    static  getBooksByAuthor = async (params: string) =>
        await bookApi.get<BookDto[]>("/books/author/"+params)

    static  getBooksByGenre = async (params: string) =>
        await bookApi.get<BookDto[]>("/books/genre"+params)
}