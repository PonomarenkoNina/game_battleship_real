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
//Какие корабли уже были «подстрелены»?___2 вертикальных и 1 горизонтальний__
//В каких позициях?  ___D1,E1,F1___ ___B4,C4,D4___ __A0,A1,A2
//Игрок стреляет по клетке "D4", попадет ли он в корабль ? __да__ Если да, то в какой ? __B4,C4,D4__тройной вертикальный
//Игрок стреляет по клетке "B3", попадет ли он в корабль?__нет__ Если да, то в какой? __________
view.displayMiss("13"); //B3
