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
//Exersise координати пострілів: A6, B3, C4, D1, B0, D4, F0, A1, C6, B1, B2, E4, B6
var model1 = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipSunk: 0,

  ships: [
    { locations: ["06", "16", "26"], hits: ["", "", ""] }, //Перший корабль A6,B6,C6
    { locations: ["24", "34", "44"], hits: ["", "", ""] }, //Другий корабль C4,D4,E4
    { locations: ["10", "11", "12"], hits: ["", "", ""] }, //Третій корабль B0,B1,B2
  ],
};

view.displayHit("06"); //А6
view.displayMiss("13"); //B3
view.displayHit("24"); //C4
view.displayMiss("31"); //D1
view.displayHit("10"); //B0
view.displayHit("34"); //D4
view.displayMiss("50"); //F0
view.displayMiss("01"); //A1
view.displayHit("26"); //C6
view.displayHit("11"); //B1
view.displayHit("12"); //B2
view.displayHit("44"); //E4
view.displayHit("16"); //B6
