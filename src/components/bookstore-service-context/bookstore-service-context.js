import React from "react";
// Компонент, который будет поддерживать наш service, чтобы передавать service через контекст

// Позволяет передать наш services всем компонентам реакта используя Context API
const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer
} = React.createContext();

export { BookstoreServiceProvider, BookstoreServiceConsumer };
