import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import BookContextProvider, { BookContext } from '../contexts/BookContext';

//     const BookList = () => { 
//         return(
//             //because not declaring a function, just returning what's inside of parentheses dont need to declare a function
//         <AuthContext.Consumer>{(authContext) => (
//             <ThemeContext.Consumer>{(context)=> {
//                 const {isAuthenticated, toggleAuth } = authContext
//                 const { isLightTheme, light, dark} = context
//                 const theme = isLightTheme ? light: dark
//                 return (
//                         <div className = "book-list" style = {{color: theme.syntax, background: theme.bg}}>
//                         <ul>
//                             <li style = {{background: theme.ui}}>Harry Potter</li>
//                             <li style = {{background: theme.ui}}>Name of Wind</li>
//                             <li style = {{background: theme.ui}}>Final Empire</li>
//                         </ul>

//                         <div onClick = {toggleAuth}>
//                             {isAuthenticated ? 'Logged In': 'Logged out'}
//                         </div>
//                         </div>
//                     )
//         }}</ThemeContext.Consumer>)}</AuthContext.Consumer>
//         )
//         /* theme context consumer is the equivalent of theme context provider.  All you have to know is that theme context
//         provider, but you need to put a function in it with a parameter.  The function receives the currrent context value (from the provider) and then returns a react node.
//         The parameter will equal to the state prop of hte closest provider for hte context above the tree.  ALso use this for functional components.
//         Why do you need to do this for funcitonal componenets? context can only be accessed inside lifecycle methods
//         (render is mainly used in our case).  However functional components don't have a render function so you must use the consmer.*/
//     }
 
const BookList = () => {
    const { isLightTheme, dark, light } = useContext(ThemeContext)
    const {isAuthenticated, toggleAuth } = useContext(AuthContext)
    const {books}= useContext(BookContext)

    const theme = isLightTheme ? light: dark
    return (
            <div className = "book-list" style = {{color: theme.syntax, background: theme.bg}}>
            <ul>
                {books.map((book) => {
                    return (<li key = {book.id} style = {{background: theme.ui}}>{book.title}</li> )
                })}
            </ul>

            <div onClick = {toggleAuth}>
                {isAuthenticated ? 'Logged In': 'Logged out'}
            </div>
            </div>
        )
}

export default BookList;
