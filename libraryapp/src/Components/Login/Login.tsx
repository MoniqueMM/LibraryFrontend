import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthApi } from "../../Api/AuthApi";
import {
  InputContainer,
  LoginButton,
  LoginContainer,
  LoginInput,
  StyledHeading,
  ValidationError,
  RegisterLink,
} from "./Login.styles";

import { toast } from "react-toastify";
import { ACCESS_TOKEN } from "../../Constants/constants";
// tsconfig.json
import UserContext from "../../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { StyleDrawinglibrary } from "../Library/LibraryStyle";
import LibraryPic from "../../assets/library.jpg";

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const { userModifier } = useContext(UserContext);

  const onLoginClicked = useCallback(async () => {
    try {
      const result = await AuthApi.signin({
        username: username,
        password: password,
      });

      localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
      userModifier({ ...result.data });
      toast.success("Poprawnie zalogowano", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    } catch (error: any) {
      let errorMessage;

      if (error.response && error.response.status === 401) {
        errorMessage = "Podałeś błędne dane, spróbuj ponownie.";
      } else {
        errorMessage = "Wystąpił błąd podczas połączenia z serwerem.";
      }

      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [username, password, userModifier, navigate]);

  useEffect(() => {
    setIsUsernameValid(username.length > 0);
  }, [username]);

  useEffect(() => {
    setIsPasswordValid(password.length > 0);
  }, [password]);

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <LoginContainer>
      <InputContainer>
        <StyleDrawinglibrary style={{ backgroundImage: `url(${LibraryPic})` }}>
          <div
            style={{
              width: "15vw",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledHeading>
              <span style={{ color: "black" }}> LOGOWANIE</span>
            </StyledHeading>
            <LoginInput
              style={{ margin: "0 0 16px 0" }}
              placeholder="Nazwa użytkownika"
              type="username"
              onChange={(e) => onUsernameChange(e)}
            ></LoginInput>
            {!isUsernameValid && (
              <ValidationError>Wpisz nazwę użytkownika</ValidationError>
            )}
            <LoginInput
              style={{ margin: "16px 0 0 0" }}
              onChange={(e) => onPasswordChange(e)}
              placeholder="Hasło"
              type="password"
            ></LoginInput>
            {!isPasswordValid && <ValidationError>Wpisz hasło</ValidationError>}
            <LoginButton
              disabled={!isUsernameValid || !isPasswordValid}
              onClick={onLoginClicked}
            >
              Zaloguj się
            </LoginButton>
            <RegisterLink>
          <span>Nie posiadasz konta?</span>
          <Link to={"/Register"}>Zarejestruj się</Link>
        </RegisterLink>
        <RegisterLink>
          <span>Nie posiadasz konta?</span>
          <Link to={"/register"}>Zarejestruj się</Link>
        </RegisterLink>
          </div>
        </StyleDrawinglibrary>
      </InputContainer>
    </LoginContainer>
  );
};