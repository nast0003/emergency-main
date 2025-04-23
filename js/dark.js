const btn3 = document.querySelector("#switchBtn3");
const switchtext3 = document.querySelector("#switchtext3");
const css = document.querySelector("#lightmode");

btn3.addEventListener("click", changeMode3);

function changeMode3() {
  if (css.getAttribute("href").includes("dark.css")) {
    css.setAttribute("href", "css/light.css");
    switchtext3.textContent = "Dark Mode";
  } else {
    css.setAttribute("href", "css/dark.css");
    switchtext3.textContent = "Light Mode";
  }
}
