// Отвечает за получение данных о книгах, переписать реализацию на работу с сервером
export default class BookStoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "Артемида",
        auhor: "Энди Вейер"
      },
      {
        id: 2,
        title: "Бродяги Дхармы",
        auhor: "Джек Керуак"
      }
    ];
  }
}
