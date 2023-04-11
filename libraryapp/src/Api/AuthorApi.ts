import { AuthorDto } from "../Components/Author/AuthorDto";
import { authorApi } from "../Hooks/useAxios";
import { AddAuthorRequest } from "../Models/Author/AddAuthorRequest";
import Author from "../Models/Author/Author";
import { UpdateAuthorRequest } from "../Models/Author/UpdateAuthorRequest";



export class AuthorApi{
    static getAuthors = async () =>
    await authorApi.get<AuthorDto[]>("/author")

    static top3 =async () => 
    await authorApi.get<AuthorDto[]>("/author/topAuthor")

    // static getAuthorById = async () => 
    // await authorApi.get<AuthorDto[]>("/author/${id}")
    

    static getAuthorsByName = async (searchTerm: string) =>
    await authorApi.get<Author[]>("/author/name/"+ searchTerm)

    static postAuthor = async (author: AddAuthorRequest) =>
    await authorApi.post("/author", author)

    static updateAuthor =async (author: UpdateAuthorRequest ) => 
    await authorApi.put("/author/{id}", author)
    

    

    // static deleteAuthor =async () => 
    // static deleteAuthor.delete("/author/{id}")    
    

}