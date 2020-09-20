import React, { createContext, useState} from 'react';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    //props are for the this.props.children
    const [books, setBooks] = useState([
        {title: 'Harry Potter', id: 1},
        {title: 'Harry Potter 2', id: 2},
        {title: 'Harry Potter 3', id: 3},
        {title: 'Harry Potter 4', id: 4},
    ])
    return (
        <BookContext.Provider value = {{books}}>
            {props.children}
        </BookContext.Provider> 

    );
}
 
export default BookContextProvider;