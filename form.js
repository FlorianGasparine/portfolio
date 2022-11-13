let email = document.querySelector("#email");
let firstName = document.querySelector("#name");
let lastName = document.querySelector("#lastName");
let message = document.querySelector("#message");
let submit = document.querySelector("#submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  let body = `
  <h3>Nom : ${lastName.value}</h3>
  <h3>Prénom : ${firstName.value}</h3>
  <h3>Email : ${email.value}</h3>
  <p>Message : ${message.value}</p>
  `;

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
});
