import React, { useEffect, useState } from 'react';
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import './AddAuthorCss.css';
import { AuthorApi } from '../../Api/AuthorApi';
import { ShowPage } from '../../Models/Author/showPage';
import { ViewAuthors } from './ViewAuthors';
import { useNavigate } from 'react-router';

// guzik cancle działa nie wiem jak ale działa


interface AddAuthorProps{
    userName: string;
    backHandler:() =>void;
}

export const AddAuthor = (props: AddAuthorProps) => {
   const[name, setName] = React.useState<string>("");
   const[dateOfBirth,setDateOfBirth] = React.useState<string>("")
   const [isError, setIsError] = React.useState<boolean>(true);
   const [wasEdited, setWasEdited] = React.useState<boolean>(false);
   const [showPage, setShowPage] = useState(ShowPage.addAuthor);
   const { backHandler} = props 

  
  const handleSubmit = async () => {
    const result = await AuthorApi.postAuthor({ dateOfBirth: dateOfBirth,name: name })


  }

  const onNameChanged = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value);
    setWasEdited(true);
    setIsError(e.target.value.length <= 0);
    
  }
  
  const onDateChanged = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setDateOfBirth(e.target.value);
  }
  
   
   return(
    <div id="addAuthor">
      {showPage === ShowPage.addAuthor &&(
        <div>
        <h1>Add Author</h1>
        <Input 
        type="text" 
        placeholder='Author name' 
        value={name}
        onChange = {onNameChanged}
         />
        {isError && wasEdited &&(
            <p style={{color: "red"}}>Name is empty!</p>
        )}
        <Input 
        placeholder="Select Date and Time" 
        size="md" type="datetime-local"
        value={dateOfBirth}
        onChange = {onDateChanged}
        />
        <Button type="submit" colorScheme='blue' disabled={isError} onClick={handleSubmit}>Submit</Button>
        <Button colorScheme='blue' onClick={(backHandler)}>Cancel</Button>
        </div>
        )}
     
{showPage === ShowPage.list && <ViewAuthors />}
    </div>
    );
}


