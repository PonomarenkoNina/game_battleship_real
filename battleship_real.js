//Визначаємо об'єкт подання(відповідає за оновлення подання)
//Оголошуємо методи, які стосуються об'єкту подання - declare methods related to the view object
var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};
//Тест - постріл гравця А0, D4, F5, B2, C5, C6
view.displayMiss("00"); //А0
view.displayHit("34"); //D4
view.displayMiss("55"); //F5
view.displayHit("12"); //B2
view.displayMiss("25"); //C5
view.displayHit("26"); //C6
view.displayMessage("Tap, tap, is this thing on?");

//Об'єкт моделі(зберігаємо поточний стан гри - позиції кораблів, влучання і лічильник потоплених кораблів)
//Кожний корабль уявляємо об'єктом, який зберігає координати зайнятих клітин і кількість влучань
var ship1 = { locations: ["10", "20", "30"], hits: ["", "", ""] };
var ship2 = { locations: ["32", "33", "34"], hits: ["", "", ""] };
var ship3 = { locations: ["63", "64", "65"], hits: ["", "", "hit"] };
//Створюємо масив для зберігання всіх даних
var ships = [
  { locations: ["10", "20", "30"], hits: ["", "", ""] }, //Перший корабль В0,С0,D0
  { locations: ["32", "33", "34"], hits: ["", "", ""] }, //Другий корабль D2,D3,D4
  { locations: ["63", "64", "65"], hits: ["", "", "hit"] }, //Третій корабль G3,G4,G5
];
