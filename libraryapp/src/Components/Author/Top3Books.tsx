import { useState, useEffect } from "react";
import { BookApi } from "../../Api/BookApi";
import { BookDto } from "../Book/BookDto";
import { Book } from "../Book/Book";
import { Header, ItemsContainer, StoreContainer } from "./Top3.style";

export const Top3Books = () => {
  const [books, setBooks] = useState<BookDto[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await BookApi.top3Books();
    setBooks(
      result.data.map((book) => {
        return {
          ...book,
          src: `${process.env.PUBLIC_URL}/Images/Books/${book.id}.jpeg`,
        };
      })
    );
  };

  return (
    <StoreContainer>
      <Header>
        <h1>Zobacz nasze Top 3 wśród książek!</h1>
      </Header>
      {books.length > 0 ? (
        <>
          <ItemsContainer>
            {books?.map((x) => (
              <Book book={x} />
            ))}
          </ItemsContainer>
        </>
      ) : (
        <h2>Nie mamy aktualnie żadnych produktów, zajrzyj do nas później</h2>
      )}
    </StoreContainer>
  );
};
