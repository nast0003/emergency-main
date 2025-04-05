// Summary kode

// console.log(document.querySelector("#name").value);
//document.querySelector("#sum").style.display = "hidden";

const submit = document.querySelector("#btn-indsend");
const name = document.querySelector("#sumName");
const email = document.querySelector("#sumEmail");
const lokation = document.querySelector("#sumLocation");
const beskrivelse = document.querySelector("#sumDescription");

submit.onclick = (e) => {
  e.preventDefault();
  submitForm();
};

function submitForm() {
  document.querySelector("#sumName").innerHTML = document.querySelector("#name").value;
  document.querySelector("#sumEmail").textContent = document.querySelector("#email").value;
  document.querySelector("#sumLocation").textContent = document.querySelector("#lokation").value;
  document.querySelector("#sumDescription").textContent = document.querySelector("beskrivelse").value;
}

document.querySelector("#reset-btn").addEventListener("click", reset);

function reset() {
  document.querySelector("#webform").reset();
  document.querySelector("#sum").style.visibility = "hidden";
}
