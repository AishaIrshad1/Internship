let count = 0;

const countDisplay = document.getElementById("count");
const statusText = document.getElementById("status");
const toast = document.getElementById("toast");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

function updateUI() {
  countDisplay.textContent = count;

  if (count > 0) {
    statusText.textContent = "Great! You're going up ";
    countDisplay.style.color = "#27ae60"; // green
  } else if (count < 0) {
    statusText.textContent = "Oops! You're in minus ";
    countDisplay.style.color = "#e74c3c"; // red
  } else {
    statusText.textContent = "You're at zero";
    countDisplay.style.color = "#333"; // neutral
  }

  // Disable decrement at -10, increment at 10
  decrementBtn.disabled = count <= -10;
  incrementBtn.disabled = count >= 10;

  showToast("Count updated to " + count);
}

function increment() {
  if (count < 10) {
    count++;
    updateUI();
  }
}

function decrement() {
  if (count > -10) {
    count--;
    updateUI();
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
}

// Initial UI update
updateUI();
