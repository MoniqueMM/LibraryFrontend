import Book from "../../assets/book-library.png";
import { LibraryContainer,StyleDrawinglibrary,StylePicture, StyleHeading, StyleBody} from "./LibraryStyle";
import LibraryPic from "../../assets/library.jpg";



export const Library = () => {
    
    return ( <LibraryContainer>
    < StyleDrawinglibrary>
        <img src={LibraryPic} style ={{width: "100%", height: "100%"}} />
    </StyleDrawinglibrary>
      <StylePicture>
        <img src={Book} style={{width: "900px", height: "650px"}} />
    </StylePicture>
        <StyleHeading >
            <h1><span>Zapraszamy do Nowoczesnej Biblioteki</span></h1>
            </StyleHeading >
        <StyleBody>
            <h2>„Kiedy masz jakieś wątpliwości, idź do biblioteki”</h2>
            <h3> Joanne K. Rowling</h3>
        <h2>    „Książka to mędrzec łagodny i pełen słodyczy,  <br/>który puste życie napełnia światłem, <br/>a puste serca wzruszeniem.”</h2>
        <h3><br/>Kornel Makuszyński</h3>
         </StyleBody>
   
         
        </LibraryContainer> 
    );
};