import React, { Component } from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
// Для того, чтобы получить доступ к редакс стору
import { connect } from "react-redux";

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

// Читаем книги из нашего редакс стора
const mapStateToProps = ({ books }) => {
  return {
    books
  };
};

// Connect - функция, которая возвращает функцию
// Экспортируем результат функции connect()
export default connect(mapStateToProps)(BookList);
