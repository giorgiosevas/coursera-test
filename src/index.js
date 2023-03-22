import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from './books';//the {} means named export
import Book from './Book';

/**
 * The BookList function returns a section element with the class name booklist. Inside the section
 * element, we map over the books array and return a Book component for each book in the array. We pass
 * the book object as a prop to the Book component and give each Book component a key prop equal to the
 * book's id.
 * @returns An array of Book components.
 */
const BookList = () => {
  return (
    <>
      <h1>Amazon Best Seller</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};


/* This is a new feature in React 16.8. It allows you to render a React component to a DOM node without having to wrap it in a ReactDOM.render() call. */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);


//SOS:
/**
 * The spread operator ... is used to spread the properties of the book object as individual props of the Book component.
So, {...book} means that all the properties of the book object are being passed as separate props to the Book component.
This is a shorthand way of passing props to a component without having to manually specify each prop individually. In other words, it allows you to pass all the properties of an object as separate props to a component.
 */
