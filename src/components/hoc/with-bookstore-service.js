import React from "react";
import { BookstoreServiceConsumer } from "../bookstore-service-context";

// В компоненте HOC, создаем новый компонент
// Wrapped - компонент, который мы будем оборачивать
// Отанется только обернуть нужный компонент в компонент HOC и мы получим доступ к service
const withBookstoreService = () => Wrapped => {
  return props => {
    return (
      // Для того, чтобы получить данные из Consumer`a, нам нужно передать в него render функцию, которая примет тот services ,который мы передадим через контекст
      <BookstoreServiceConsumer>
        {/* services, который мы должны передать */}
        {bookstoreService => {
          // В компонент который мы передаем все свойства, которые получил наш собственный компонент и передаем сервис, который плучили из контекста
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;
