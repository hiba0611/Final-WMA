function explore() {
  alert("Welcome to AromaLux & GlowCare!");
}

// Dark mode toggle
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
