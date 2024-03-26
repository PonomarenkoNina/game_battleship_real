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

//Використання структури даних ships і моделювання серії операцій.
//За наведеним нижче визначенням ships знайти відповіді на наступні запитання та заповніть перепустки.
var ships = [
  { locations: ["31", "41", "51"], hits: ["", "", ""] },
  { locations: ["14", "24", "34"], hits: ["", "hit", ""] },
  { locations: ["00", "01", "02"], hits: ["hit", "", ""] },
];
view.displayHit("31"); //D1
view.displayHit("41"); //E1
view.displayHit("51"); //F1
view.displayHit("14"); //B4
view.displayHit("24"); //C4
view.displayHit("34"); //D4
view.displayHit("00"); //A0
view.displayHit("01"); //A1
view.displayHit("02"); //F2
//Какие корабли уже были «подстрелены»?___ship 2 и 3__
//В каких позициях?  ___С4, A0__
//Игрок стреляет по клетке "D4", попадет ли он в корабль ? __да__ Если да, то в какой ? __ship 2__
//Игрок стреляет по клетке "B3", попадет ли он в корабль?__нет__ Если да, то в какой? __________
view.displayMiss("13"); //B3

var ship1 = { locations: ["31", "41", "51"], hits: ["", "", ""] };
var ship2 = { locations: ["14", "24", "34"], hits: ["", "hit", ""] };
var ship3 = { locations: ["00", "01", "02"], hits: ["hit", "", ""] };
//Допишите следующий код, чтобы он определял позицию средней клетки корабля и выводил ее методом console.log:
var ship2 = ships[1];
var locations = ship2.locations;
console.log("Location is " + locations[1]);
//Допишите следующий код, чтобы он определял, было ли попадание в первой клетке третьего корабля:
var ship3 = ships[2];
var hits = ship3.hits;
if (hits[0] === "hit") {
  console.log("Ouch, hit on third ship at location one");
}
//Допишите следующий код, чтобы он записывал попадание в третью клетку первого корабля:
var ship1 = ships[0];
var hits = ship1.hits;
hits[2] = "hit";
