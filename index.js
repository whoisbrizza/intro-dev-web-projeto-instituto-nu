function getValue() {
  var value = document.getElementById("name").value;
  document.getElementById("result").innerHTML = "Bem vinda, " + value + "!";
}

function removeValue() {
  document.getElementById("name").value = "";
  document.getElementById("result").innerHTML = "";
}
