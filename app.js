const contactForm = document.querySelector(".contact-form");

let name = document.querySelector("#name");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let message = document.querySelector("#message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value,
  };
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email sent");
      name.value = "";
      lastName.value = "";
      email.value = "";
      message.value = "";
    } else {
      alert("Something went wrong !");
    }
  };
  xhr.send(JSON.stringify(formData));
});
