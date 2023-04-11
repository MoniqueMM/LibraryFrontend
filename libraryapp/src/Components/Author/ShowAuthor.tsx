
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PrimaryButton } from "../GlobalStyle";
import { AuthorDto } from "./AuthorDto";
import { AuthorContainer, Header, Info } from "./ShowAuthor.style";

export const ShowAuthor = () => {
  const [author, setAuthor] = useState<AuthorDto[]>([]); //domyślna wartośc stanu // dodanie czego po czym będziemy iterować

  const { id } = useParams();

  useEffect(() => {
    // z racji tego że hook useEffect może zwracać tylko funkcję czyszczącą lub nic to tworzymy nową funkcję
    loadAuthors(); // tu musimy zawołać tą funkcję
  }, []);

  const loadAuthors = async () => {
    const result = await axios.get(`http://localhost:8080/api/author/${id}`);
    setAuthor(result.data);
  };

  return (
    <AuthorContainer>
      {author.map((author) => (
        <>
          <Header>
            <p  >
              Imię authora:<br></br> {author.name}{" "}
            </p>
          </Header>
          <Info>
            <div id="aBirth">
              <p>
                Urodziny:<br></br> {author.dateOfBirth}
              </p>
            </div>
            <div id="aDesc">
              <p>
                Opis:<br></br> {author.description}
              </p>
            </div>
          </Info>
          <Link to={"/"}>
            <PrimaryButton>Home</PrimaryButton>
          </Link>
        </>
      ))}
    </AuthorContainer>
  );
};
