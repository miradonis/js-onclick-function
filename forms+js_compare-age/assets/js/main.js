function calculateDifference(event) {
  event.preventDefault();
  const first__age = document.getElementById("first__age").value;
  const second__age = document.getElementById("second__age").value;
  let difference = first__age - second__age;

  document.getElementById("result").innerHTML = "Ich bin" + difference;
}
