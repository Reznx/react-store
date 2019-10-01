import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

// Отлавливаем ошибку
export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  // Вызовется тогда, когда у компонента, ниже по иерархии, возникнет ошибка
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    // Возвратить компоненты ниже по иерархии
    return this.props.children;
  }
}
