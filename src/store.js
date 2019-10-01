import { createStore } from "redux";

import reducer from "./reducers";

// Создаем редакс стор и инициализируем редьюсер
const store = createStore(reducer);

export default store;
