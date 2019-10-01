const initialState = {
  books: [
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
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        // Присваем массив книг ,который мы загрузили
        books: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
