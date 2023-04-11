
import { Router } from 'express'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthorHomePage } from '../Components/Author/AuthorHomePage'
import { SearchAuthorByName } from '../Components/Author/SearchAuthorByName'
import { Home } from '../Components/Home'
import { Navbar } from '../Components/Navbar/Navbar'

import { AddBook } from '../Components/Book/AddBook';
import {Login} from '../Components/Login/Login';
import { Library } from '../Components/Library/Library';
import { Register } from '../Components/Register/Register';
import {AllBooks} from "../Components/Book/AllBooks";
import { UnauthorizedRoute } from '../Components/UnauthorizedRoute'
import { ProtectedRoute } from '../Components/ProtectedRoute'
import { Profile } from '../Components/profile/Profile'
import { ShowAuthor } from '../Components/Author/ShowAuthor'


export const AppRouter = () => {
  return (

    <Routes>

        <Route path="/" element={<Navbar/>}> 

        <Route index element={<Home />} />
        {/* //<Route index element={<Library/>} /> */}
        <Route path='book'element={<AllBooks/>}> Książki</Route>

        <Route path='authorhomepage' element={<AuthorHomePage />}>Autor</Route>
        <Route path='authorhomepage/:id' element={<ShowAuthor />}>Autor</Route>
        <Route path='login' 
        element={
        <UnauthorizedRoute>
        <Login />
        </UnauthorizedRoute>

        }>Logowanie</Route>
         <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
        <Route path='register' element={<Register />}>Rejestracja</Route>             
        </Route>

    </Routes>
  )
}
