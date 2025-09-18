// Part 1: Event Handling


// Click event
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "🎉 Button was clicked!";
});

// Key input event
const keyInput = document.getElementById("keyInput");
const typedText = document.getElementById("typedText");

keyInput.addEventListener("keyup", () => {
  typedText.textContent = `You typed: ${keyInput.value}`;
});


// Part 2: Interactive Elements


// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature
let count = 0;
const countDisplay = document.getElementById("count");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

increment.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decrement.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});


// Part 3: Form Validation


const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent actual form submission

  let valid = true;

  // Validate Name (must not be empty)
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  if (valid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
