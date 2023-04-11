import { BookDto } from "./BookDto";
import {
    ItemPhoto,
    ItemContainer,
    DataContainer,
    ImportantInfo,
} from "./Books.styles";

type BookProps = {
    books: BookDto;
};
export const OtherBook = ({ books }: BookProps) => {



    return (
        <ItemContainer>
            <ItemPhoto src={books.src} alt={"Book"} />
            <DataContainer>
                <ImportantInfo key={books.id}>{books.title}</ImportantInfo>
                <h4 >
                    {books.authors.map((x) => (
                        <p>{x}</p>
                    ))}
                </h4>
                <span>Dostępna ilość : {books.quantity} </span>
            </DataContainer>
        </ItemContainer>
    );
};
