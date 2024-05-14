function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  var color = getRandomColor();
  var moth = document.getElementById("shape-moth");
  var main = moth.querySelector("#main");
  main.style.fill = color;
}
