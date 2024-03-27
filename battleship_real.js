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

view.displayHit("06"); //А6
view.displayHit("24"); //C4
view.displayHit("10"); //B0
view.displayHit("34"); //D4
view.displayHit("26"); //C6
view.displayHit("11"); //B1
view.displayHit("12"); //B2
view.displayHit("44"); //E4
view.displayHit("16"); //B6

var model = {
  boardSize: 7,
  numShips: 3,
  shipSunk: 0,
  shipLength: 3,
  ships: [
    { locations: ["06", "16", "26"], hits: ["", "", ""] }, //Перший корабль A6,B6,C6
    { locations: ["24", "34", "44"], hits: ["", "", ""] }, //Другий корабль C4,D4,E4
    { locations: ["10", "11", "12"], hits: ["", "", ""] }, //Третій корабль B0,B1,B2
  ],
  //Метод отримує координати пострілу, потім перебираємо масив ships, перевіряючи кожний корабль
  //Метод indexOf шукає вказане значення і повертає його індекс (-1 або значення відсутнє)
  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);

      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess); //Повідомляємо подання, що в клітинці guess треба вивести маркер попадання
        view.displayMessage("HIT"); //Наказуємо поданні вивести повідомлення "HIT"

        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!"); //Повідомляємо ігроку, що він потопив корабль
          this.shipSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess); //Повідомляємо подання, що в клітинці guess треба вивести маркер промаху
    view.displayMessage("You missed."); //Наказуємо поданні вивести повідомлення промаху
    return false;
  },
  //Додамо допоміжний метод для перевірки умови, яка перевіряє, чи потоплено корабель
  isSunk: function (ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },
};

model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");
