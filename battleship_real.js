//Oголошуємо методи, які стосуються об'єкту подання - declare methods related to the view object
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
