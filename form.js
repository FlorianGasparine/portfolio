let email = document.querySelector("#email");
let firstName = document.querySelector("#name");
let lastName = document.querySelector("#lastName");
let message = document.querySelector("#message");
let submit = document.querySelector("#submit");

//Error message
let errorFirstName = document.querySelector(".form__error--firstName");
let errorLastName = document.querySelector(".form__error--lastName");
let errorEmail = document.querySelector(".form__error--email");
let errorMessage = document.querySelector(".form__error--message");

// Regex
let regexOnlyletter = new RegExp("^[0-9]+$");
let regexEmail = new RegExp(
  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
);

submit.addEventListener("submit", (e) => {
  let validateForm = true;
  e.preventDefault();
  errorFirstName.textContent = "";
  errorLastName.textContent = "";
  errorEmail.textContent = "";
  errorMessage.textContent = "";

  // Verification first name

  if (firstName.value.length < 2) {
    errorFirstName.textContent = "⛔Veuillez saisir au moins 2 lettres";
    validateForm = false;
  }
  if (regexOnlyletter.test(firstName.value)) {
    errorFirstName.textContent = "⛔Veuillez saisir uniquement des lettres ";
    validateForm = false;
  }

  // Verification Last name
  if (lastName.value.length < 2) {
    errorLastName.textContent = "⛔Veuillez saisir au moins 2 caractères";
    validateForm = false;
  }
  if (regexOnlyletter.test(lastName.value)) {
    errorLastName.textContent = "⛔Veuillez saisir uniquement des lettres ";
    validateForm = false;
  }

  // Verification email
  if (regexEmail.test(email.value) == false) {
    errorEmail.textContent = "⛔Veuillez saisir une adresse email valide ";
    validateForm = false;
  }

  // Verification message
  if (message.value.length < 3) {
    errorMessage.textContent = "Faut pas être timide comme ça 😃";
    validateForm = false;
  }

  if (validateForm == true) {
    let body = `
      <h3>Nom : ${lastName.value}</h3>
      <h3>Prénom : ${firstName.value}</h3>
      <h3>Email : ${email.value}</h3>
      <h3>Message :</h3>
      <p>${message.value}</p>`;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "gasparine.florian@gmail.com",
      Password: "B6955205980B75F213E59B1264D9A5021919",
      To: "gasparine.florian@gmail.com",
      From: "gasparine.florian@gmail.com",
      Subject: `${lastName.value} ${firstName.value} Portfolio`,
      Body: body,
    }).then(() => {
      alert("🛩️ Message envoyé avec succés");
      location.reload();
    });
  }
});
