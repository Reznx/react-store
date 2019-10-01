import React from "react";
import BookList from "../book-list";

const home = () => {
  const books = [
    {
      id: 1,
      title: "Артемида",
      author: "Энди Вейер"
    },
    {
      id: 2,
      title: "Бродяги Дхармы",
      author: "Джек Керуак"
    }
  ];

  return <BookList books={books} />;
};

export default home;
