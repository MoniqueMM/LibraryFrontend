import { Genres } from "./Genres";

interface Book {
    id: string;
    title:string

    isbn:number
    quantity:number
    releaseDate:Date
    src:string
    genres: Genres


}

export default Book;