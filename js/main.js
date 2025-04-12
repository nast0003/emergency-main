// document.querySelector("#circle1").addEventListener("mouseover", headHighlight);
// document.querySelector("#circle1").addEventListener("mouseout", headunHighlight);
// document.querySelector("#circle1").addEventListener("click", headInfo);

// function headHighlight() {
//   console.log("headHighlight");
//   document.querySelector("#circle1").style.fill = "white";
// }

// function headunHighlight() {
//   console.log("headunHighlight");
//   document.querySelector("#circle1").style.fill = "red";
// }

// function headInfo() {
//   console.log("headInfo");
//   document.querySelector(".info-text > h2").textContent = "Hovedet!";
//   document.querySelector(".info-text > article > p").textContent = "lorem ipsum";
// }

const circles = document.querySelectorAll("circle");

circles.forEach((circle) => {
  // Hover-effekt
  circle.addEventListener("mouseover", () => {
    circle.setAttribute("fill", "white");
  });

  circle.addEventListener("mouseout", () => {
    circle.setAttribute("fill", "red");
  });

  // Klik for at vise info
  circle.addEventListener("click", () => {
    const title = circle.getAttribute("data-title") || "Ingen titel";
    const text = circle.getAttribute("data-text") || "Ingen tekst";
    document.querySelector(".info-text h2").textContent = title;
    document.querySelector(".info-text article p").textContent = text;
  });
});

// document.querySelector("#circle2").addEventListener("mouseover", headHighlight);
// document.querySelector("#circle2").addEventListener("mouseout", headunHighlight);
// document.querySelector("#circle2").addEventListener("click", headInfo);

// function headHighlight() {
//   console.log("headHighlight");
//   document.querySelector("#circle2").style.fill = "white";
// }

// function headunHighlight() {
//   console.log("headunHighlight");
//   document.querySelector("#circle2").style.fill = "red";
// }

// function headInfo() {
//   console.log("headInfo");
//   document.querySelector(".info-text > h2").textContent = "Hovedet!";
//   document.querySelector(".info-text > article > p").textContent = "lorem ipsum";
// }
