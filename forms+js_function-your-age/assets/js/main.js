function calculateDifference() {
  const year__of__birth = document.getElementById("year__of__birth").value;
  let calculate = 2022 - year__of__birth;

  const text = document.getElementById("text");
  text.innerHTML = "Du bist " + calculate + " Jahre alt!";
}

calculateDifference();
