const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const fullnameValue = fullnameInput ? fullnameInput.value.trim() : "";
  const emailValue = emailInput ? emailInput.value.trim() : "";

  if (usernameValue === "" || passwordValue === "") {
    alert("Please fill in all fields.");
  } else if (form.id === "signup" && (fullnameValue === "" || emailValue === "")) {
    alert("Please fill in all fields.");
  } else {
    // Form submission code here
  }
});
