import { useContext, useState } from "react";
import UserContext from "../../Context/UserContext";
import { ProfilePageSection } from "../../Models/Api/ProfilePageSection";
import { LeftSide } from "../Author/Author.styles";
import { Orders } from "./Orders";
import { ProfileContainer, ProfileWrapper, HiText, NameText, RightSection } from "./Profile.style";

export const Profile = () => {
    const { currentUser } = useContext(UserContext);
  
    const [section, setSection] = useState<ProfilePageSection>(
      ProfilePageSection.Orders
    );
  
  
    const mapSectionToComponent = () => {
      switch (section) {
        case ProfilePageSection.Orders:
          return <Orders />;
        
      }
    };
  
    return (    
    <ProfileContainer>
      <ProfileWrapper>
        <LeftSide>
          <HiText>Cześć</HiText>
          <NameText>{currentUser?.username}</NameText>
          {/* <Option onClick={() => setSection(ProfilePageSection.Orders)}>

            <span>Zamówienia</span>
          </Option> */}
        </LeftSide>
        <RightSection>{mapSectionToComponent()}</RightSection>
      </ProfileWrapper>
    </ProfileContainer>
    );
  };
  