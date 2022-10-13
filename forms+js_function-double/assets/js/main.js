function doubleNumber() {
  const getNumber = document.getElementById("inputNumber").value;
  let newNumber = getNumber * 2;
  document.getElementById("inputNumber").value = newNumber;
  const print = document.getElementById("result");
  print.innerHTML = "Ergebniss: " + newNumber;
}

doubleNumber();
