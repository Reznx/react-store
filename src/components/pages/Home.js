import React from "react";
import BookList from "../book-list";

const Home = () => {
  // Отрисовываем компонент, уже обернутый в функцию connect()(BookList)
  return <BookList />;
};

export default Home;
