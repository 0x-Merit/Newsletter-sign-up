"use strict";

const content = document.querySelector(".content");
const inputEl = document.querySelector(".input");
const subBtn = document.querySelector(".subscribe-btn");
const dimBtn = document.querySelector(".dismiss-btn");
const successEl = document.querySelector(".success-message");
const subMail = document.querySelector(".submail");

subBtn.addEventListener("click", () => {
  if (inputEl.value !== "") {
    content.classList.add("hide");
    successEl.classList.remove("hide");
    subMail.textContent = inputEl.value;
    document.querySelector(".mail p").innerHTML = "";
  } else {
    document.querySelector(".mail p").innerHTML = "Valid Email Required";
    inputEl.classList.add("active");
  }
});

dimBtn.addEventListener("click", () => {
  content.classList.remove("hide");
  successEl.classList.add("hide");
  inputEl.value = "";
  inputEl.classList.remove("active");
});
