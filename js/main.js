document.querySelector("#head_circle").addEventListener("mouseover", headHighlight);
document.querySelector("#head_circle").addEventListener("mouseout", headunHighlight);
document.querySelector("#head_circle").addEventListener("click", headInfo);

function headHighlight() {
  console.log("headHighlight");
  document.querySelector("#head_circle").style.fill = "white";
}

function headunHighlight() {
  console.log("headunHighlight");
  document.querySelector("#head_circle").style.fill = "red";
}

function headInfo() {
  console.log("headInfo");
  document.querySelector(".info-text > h2").textContent = "Hovedet!";
  document.querySelector(".info-text > article > p").textContent = "lorem ipsum";
}
