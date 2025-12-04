document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("form-message").classList.remove("hidden");
    this.reset();
  });
