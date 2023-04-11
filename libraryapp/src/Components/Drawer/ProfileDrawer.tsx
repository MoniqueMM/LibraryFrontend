import React, { useCallback, useContext } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import UserContext from "../../Context/UserContext";
import {
    ProfileDrawerContainer,
    UserName,
    Email,
} from "./ProfileDrawerStyle";
import { useNavigate } from "react-router-dom";
import AccountIcon from "../../icons/AccountIcon";
import { ACCESS_TOKEN } from "../../Constants/constants";
import { PrimaryButton, SecondaryButton } from "../GlobalStyle";

interface ProfileDrawerProps {
    isProfileDrawerOpen: boolean;
    toggleProfileDrawer: () => void;
}

export const ProfileDrawer = (props: ProfileDrawerProps) => {
    const { currentUser, userModifier } = useContext(UserContext);
    const navigate = useNavigate();

    const onLogout = useCallback(() => {
        userModifier(null);
        localStorage.removeItem(ACCESS_TOKEN);
        navigate("/login");
        props.toggleProfileDrawer();
    }, [navigate, props, userModifier]);

    const onRegisterClicked = useCallback(() => {
        // TODO Add registration
    }, []);

    return (
        <Drawer
            open={props.isProfileDrawerOpen}
            onClose={props.toggleProfileDrawer}
            direction="right"
        >
            <ProfileDrawerContainer>
                {currentUser ? (
                    <>
                        <AccountIcon />
                        <UserName>{currentUser.username}</UserName>
                        <Email>{currentUser.email}</Email>
                        <PrimaryButton
                            onClick={() => {
                                navigate("/profile");
                                props.toggleProfileDrawer();
                            }}
                        >
                            Twoje konto
                        </PrimaryButton>
                        <SecondaryButton onClick={onLogout}>Wyloguj się</SecondaryButton>
                    </>
                ) : (
                    <>
                        <h2>Nie jesteś zalogowany</h2>
                        <p>
                            Aby uzyskać dostęp do naprawdę tajnych danych po prostu zaloguj
                            się.
                        </p>
                        <PrimaryButton
                            onClick={() => {
                                navigate("/login");
                                props.toggleProfileDrawer();
                            }}
                        >
                            Zaloguj się
                        </PrimaryButton>
                        <SecondaryButton onClick={onRegisterClicked}>
                            Zarejestruj się
                        </SecondaryButton>
                    </>
                )}
            </ProfileDrawerContainer>
        </Drawer>
    );
};
