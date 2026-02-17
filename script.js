document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! An Alpha Boca Raton Plumbers representative will call you shortly.");
    form.reset();
  });
});
