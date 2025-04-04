// Summary kode

// console.log(document.querySelector("#name").value);

const submit = document.querySelector("#btn-indsend");
const name = document.querySelector("#sumName");
const email = document.querySelector("#sumEmail");
const Lokation = document.querySelector("#sumLocation");
const beskrivelse = document.querySelector("#sumDescription");

submit.addEventListener("click", submitForm);

function submitForm() {
  document.querySelector("sumName").textContent = document.querySelector("#name").value;
  document.querySelector("sumEmail").textContent = document.querySelector("#email").value;
  document.querySelector("sumLocation").textContent = document.querySelector("#Lokation").value;
  document.querySelector("sumDescription").textContent = document.querySelector("beskrivelse").value;
}
