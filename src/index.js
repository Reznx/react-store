import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./components/bookstore-service-context";

import store from "./store";

// Новый инстанс сервиса, чтобы его можно было передавать другим компонентам и с ним работать
const bookstoreService = new BookstoreService();

ReactDOM.render(
  // Предоставляет доступ к Redux Store
  <Provider store={store}>
    {/* Обработка ошибок ниже */}
    <ErrorBoundry>
      {/* Передает сервис через Context API */}
      <BookstoreServiceProvider value={bookstoreService}>
        {/* Даем доступ функциональности роутинга */}
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
