import { BookDto } from "./BookDto";
import {
  ItemPhoto,
  ItemContainer,
  DataContainer,
  ImportantInfo,
} from "./Books.styles";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";
import { PrimaryButton } from "../GlobalStyle";
import SearchContext from "../../Context/SearchContext";

type BookProps = {
  book: BookDto;
};

export const Book = ({ book }: BookProps) => {
  const { addBook } = useContext(CartContext);

  const onAddToCart = () => {
    addBook(book);
  };

  return (
    <ItemContainer>
      <ItemPhoto src={book.src} alt={"Book"} />
      <DataContainer>
        <ImportantInfo key={book.id}>{book.title}</ImportantInfo>
        <h4 >
          {book.authors.map((x) => (
            <p>{x}</p>
          ))}
        </h4>
          <span>Dostępna ilość : {book.quantity} </span>
      </DataContainer>
      <PrimaryButton onClick={onAddToCart}>Dodaj do listy</PrimaryButton>
    </ItemContainer>
  );
};
