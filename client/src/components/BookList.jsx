// BookList.js

import React from "react";
import Book from "./Book";

function BookList({ books }) {
    return (
        <div>
            {books.map((book, index) => (
                <Book key={index} rank={index + 1} title={book.title} />
            ))}
        </div>
    );
}

export default BookList;
