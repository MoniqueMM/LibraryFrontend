import React, { createContext, useState } from "react";
import { DrawerContextType } from "../Models/Drawer/DrawerContextType";
import { ProfileDrawer } from "../Components/Drawer/ProfileDrawer";
import { CartDrawer } from "../Components/Drawer/CartDrawer";
import {SearchDrawer} from "../Components/Drawer/SearchDrawer";

const defaultSettings: DrawerContextType = {
  isCartDrawerOpen: false,
  toggleCartDrawer: () => {},
  isProfileDrawerOpen: false,
  toggleProfileDrawer: () => {},
    isSearchDrawerOpen: false,
    toggleSearchDrawer: () => {}
};

export const DrawerContext = createContext<DrawerContextType>(defaultSettings);

export const DrawerContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] =
    useState<boolean>(false);
    const [isSearchDrawerOpen, setIsSearchDrawerOpen] =
        useState<boolean>(false);

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen(!isCartDrawerOpen);
  };

  const toggleProfileDrawer = () => {
    setIsProfileDrawerOpen(!isProfileDrawerOpen);
  };

    const toggleSearchDrawer = () => {
        setIsSearchDrawerOpen(!isSearchDrawerOpen);
    };



    return (
    <DrawerContext.Provider
      value={{
        isCartDrawerOpen,
        toggleCartDrawer,
        isProfileDrawerOpen,
        toggleProfileDrawer,
          isSearchDrawerOpen,
          toggleSearchDrawer

      }}
    >
      {children}
        <CartDrawer
            isCartDrawerOpen={isCartDrawerOpen}
            toggleCartDrawer={toggleCartDrawer}
        />
      
      <ProfileDrawer
        isProfileDrawerOpen={isProfileDrawerOpen}
        toggleProfileDrawer={toggleProfileDrawer}
      />

        <SearchDrawer
            isSearchDrawerOpen={isSearchDrawerOpen}
            toggleSearchDrawer={toggleSearchDrawer}
        />
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
