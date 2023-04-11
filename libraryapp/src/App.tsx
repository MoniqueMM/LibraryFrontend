import "./App.css";


import { useAxios } from "./Hooks/useAxios";
import {CartContextProvider} from "./Context/CartContext";
import { AppRouter } from "./router/App.router";
import { withAxiosIntercepted } from "./Hooks/withAxiosInterceptor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DrawerContextProvider } from "./Context/DrawerContext";
import { UserContextProvider } from "./Context/UserContext";
import {useState} from "react";
import {BookDto} from "./Components/Book/BookDto";
import {SearchContextProvider} from "./Context/SearchContext";


function App() {



  useAxios();

  return (
    <div>
     <UserContextProvider>
         <CartContextProvider>
        < DrawerContextProvider>
            <SearchContextProvider>
            <AppRouter />
            </SearchContextProvider>
            <ToastContainer/>
        </DrawerContextProvider>
         </CartContextProvider>
    </UserContextProvider>
    </div>
  );

}
export default withAxiosIntercepted(App);
