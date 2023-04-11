import {Genres} from "../../Const/Genres";
import Ok1 from "../../Components/Book/Images/Pan Tadeusz.jpeg"
import Ok2 from "../../Components/Book/Images/Bastion.jpeg"
import Ok3 from "../../Components/Book/Images/Carrie.png"
import Ok4 from "../../Components/Book/Images/dziady.jpeg"
export const BooksList = [
    {   id:"1",
        title:"Pan Tadeusz , czyli ostatni zajazd na Litwie",
        author: "Adam Mickiewicz",
        releaseDate: "1834",
        genre:Genres.HISTORICAL_NOVEL,
        src: {Ok1}
    },
    { id:"2",
        title: "Bastion",
        author: "Stephen King",
        releaseDate: "1978",
        genre: Genres.HORROR,
        src: {Ok2}
    },


    { id:"3",
        title: "Carrie",
        author: "Stephen King",
        releaseDate: "1974",
        genre: Genres.HORROR,
        src:{Ok3}
    },

    { id:"4",
        title: "Dziady",
        author: "Adam Mickiewicz",
        releaseDate: "1822",
        genre: Genres.POETRY,
        src:{Ok4}
    }





]