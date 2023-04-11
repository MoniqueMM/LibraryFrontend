import { AuthorDto } from "./AuthorDto";
import { AuthorContainer, DataAuthorContainer, ImportantAuthorInfo, ItemAuthorPhoto } from "./Author.styles";
import { PrimaryButton } from "../GlobalStyle";

import { Link } from "react-router-dom";


type AuthorProps = {
    author: AuthorDto;
  };
  
  export const Author = ({ author }: AuthorProps) => {
  
    // const showAuthor = () => {
      
    // };
  
    return (
      <AuthorContainer>
        <ItemAuthorPhoto src={author.src} alt={"Author"} />
        <DataAuthorContainer>
          <ImportantAuthorInfo key={author.id}>{author.name}</ImportantAuthorInfo>
        
        </DataAuthorContainer>
        
        <Link to={`/authorhomepage/${author.id}`}>
          <PrimaryButton 
        >Show more</PrimaryButton>
        </Link>
        
      </AuthorContainer>
      
    );
  };
  