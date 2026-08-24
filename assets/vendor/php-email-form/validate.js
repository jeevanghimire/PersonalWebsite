(function () {
  "use strict";

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateEmail(email) {
    return EMAIL_REGEX.test(email);
  }

  function displayError(thisForm, error) {
    thisForm.querySelector(".error-message").innerHTML = error;
    thisForm.querySelector(".error-message").classList.add("d-block");
  }

  function clearMessages(thisForm) {
    thisForm.querySelector(".error-message").classList.remove("d-block");
    thisForm.querySelector(".sent-message").classList.remove("d-block");
  }

  let forms = document.querySelectorAll(".php-email-form");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let thisForm = this;
      clearMessages(thisForm);
      thisForm.querySelector(".loading").classList.add("d-block");

      let formData = new FormData(thisForm);
      const name = formData.get("name")?.trim();
      const email = formData.get("email")?.trim();
      const subject = formData.get("subject")?.trim();
      const message = formData.get("message")?.trim();

      if (!name || !email || !subject || !message) {
        thisForm.querySelector(".loading").classList.remove("d-block");
        displayError(thisForm, "Please complete all fields.");
        return;
      }

      if (!validateEmail(email)) {
        thisForm.querySelector(".loading").classList.remove("d-block");
        displayError(thisForm, "Please enter a valid email address.");
        return;
      }

      const emailParams = { name, email, subject, message };

      emailjs
        .send("service_6o8xeik", "template_kwnw6gf", emailParams)
        .then(() => {
          thisForm.querySelector(".loading").classList.remove("d-block");
          thisForm.querySelector(".sent-message").classList.add("d-block");
          thisForm.reset();
        })
        .catch((error) => {
          thisForm.querySelector(".loading").classList.remove("d-block");
          const errMsg = error?.text || error?.message || "Failed to send message. Please try again.";
          displayError(thisForm, errMsg);
          console.error("EmailJS error:", error);
        });
    });
  });
})();
