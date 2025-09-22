// ===============================
// Global Variables
// ===============================
let counter = 0;
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up.",
  "Failure will never overtake me if my determination to succeed is strong enough."
];

// ===============================
// Event Handling: Counter Feature
// ===============================
document.getElementById("counterBtn").addEventListener("click", () => {
  counter++;
  document.getElementById("counterDisplay").textContent = "Counter: " + counter;
});

// ===============================
// Event Handling: Quote Generator
// ===============================
document.getElementById("quoteBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
});

// ===============================
// Interactive Feature: Toggle Theme
// ===============================
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// ===============================
// Custom Form Validation
// ===============================
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent actual form submission

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  // Basic validation rules
  if (username.length < 3) {
    feedback.textContent = "❌ Username must be at least 3 characters.";
    feedback.style.color = "red";
    return;
  }
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    feedback.textContent = "❌ Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }
  if (message.length < 10) {
    feedback.textContent = "❌ Message must be at least 10 characters long.";
    feedback.style.color = "red";
    return;
  }

  // Success message
  feedback.textContent = "✅ Form submitted successfully!";
  feedback.style.color = "green";

  // Clear the form
  document.getElementById("contactForm").reset();
});
