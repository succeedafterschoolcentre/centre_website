const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const studentClass = document.getElementById("class").value.trim();

    if (!name || !phone || !studentClass) {
      formMessage.style.color = "#b42318";
      formMessage.textContent = "Please fill in all required fields.";
      return;
    }

    formMessage.style.color = "#2f7d4a";
    formMessage.textContent =
      "Thank you. We have received your enquiry and will contact you soon.";

    contactForm.reset();
  });
}
