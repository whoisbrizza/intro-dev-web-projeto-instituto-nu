function getValue() {
  var value = document.getElementById("name").value;
  document.getElementById("result").innerHTML = "Bem vinde, " + value + "!";
}

function removeValue() {
  document.getElementById("name").value = "";
  document.getElementById("result").innerHTML = "";
}
