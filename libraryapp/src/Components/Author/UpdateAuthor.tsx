import { Button, Input } from "@chakra-ui/react"
import React from "react";
import { AuthorApi } from "../../Api/AuthorApi";

export const UpdateAuthor = () =>{
    const[name, setName] = React.useState<string>("");
    const[dateOfBirth,setDateOfBirth] = React.useState<string>("")
    const [isError, setIsError] = React.useState<boolean>(true);
    const [wasEdited, setWasEdited] = React.useState<boolean>(false);


    const handleSubmit = async () => {
        const result = await AuthorApi.updateAuthor({ dateOfBirth: dateOfBirth,name: name })
    
    
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
    <div id="updateAuthor">
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
    <Button type="submit" colorScheme='blue' disabled={isError} onClick={handleSubmit}>Submit</Button>)
    </div>
)} 