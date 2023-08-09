const signupContainer = document.querySelector(".signup-container");
const successContainer = document.querySelector(".success-container");
const subscribeBtn = document.querySelector(".subBtn");
const dismissBtn = document.querySelector(".dismiss");
const input = document.querySelector("input");
const form = document.querySelector("form");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", validate);
subscribeBtn.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  const inputValue = input.value.trim();

  if (!isEmail(inputValue)) {
    errorMsg.style.display = "block";
    input.classList.add("error");
  } else {
    errorMsg.style.display = "none";
    successContainer.classList.remove("hidden");
    signupContainer.classList.add("hidden");
    input.classList.remove("error");
  }
  input.value = "";
}

dismissBtn.addEventListener("click", () => {
  signupContainer.classList.remove("hidden");
  successContainer.classList.add("hidden");
});

function isEmail(input) {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
    input
  );
}
