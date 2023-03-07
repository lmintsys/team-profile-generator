const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

function getEmployeesMarkup(employees) {
  let markup = "";

  employees.forEach((employee) => {
    if (employee instanceof Manager) {
      markup += getManagerMarkup(employee);
    } else if (employee instanceof Engineer) {
      markup += getEngineerMarkup(employee);
    } else if (employee instanceof Intern) {
      markup += getInternMarkup(employee);
    }
  });
  return markup;
}

function getManagerMarkup(manager) {
  return `<div class="card" id="employee">
  <div class="card-title">
    <div id="card-title-txt">
      <h2 class="name">${manager.name}</h2>
      <h3 class="role"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h3>
    </div>
  </div>
  <div class="card-info">
    <div class="card-info-row" id="id">${manager.id}</div>
    <div class="card-info-row" id="email"><a href="mailto:${manager.email}">${
    manager.email
  }</a></div>
    <div class="card-info-row" id="office-number">${manager.officeNumber}</div>
  </div>
</div>`;
}

function getEngineerMarkup(engineer) {
  return `<div class="card" id="employee">
  <div class="card-title">
    <div id="card-title-txt">
      <h2 class="name">${engineer.name}</h2>
      <h3 class="role"><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h3>
    </div>
  </div>
  <div class="card-info">
    <div class="card-info-row" id="id">${engineer.id}</div>
    <div class="card-info-row" id="email"><a href="mailto:${engineer.email}">${
    engineer.email
  }</a></div>
    <div class="card-info-row" id="github"><a href="https://github.com/${
      engineer.github
    }">${engineer.github}</a></div>
  </div>
</div>`;
}

function getInternMarkup(intern) {
  return `<div class="card" id="employee">
  <div class="card-title">
    <div id="card-title-txt">
      <h2 class="name">${intern.name}</h2>
      <h3 class="role"><i class="fa-solid fa-graduation-cap"></i> ${intern.getRole()}</h3>
    </div>
  </div>
  <div class="card-info">
    <div class="card-info-row" id="id">${intern.id}</div>
    <div class="card-info-row" id="email"><a href="mailto:${intern.email}">${
    intern.email
  }</a></div>
    <div class="card-info-row" id="school">${intern.school}</div>
  </div>
</div>`;
}

function generatePage(employees) {
  return (
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://kit.fontawesome.com/9819181378.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css" />
        <title>My Team</title>
      </head>
      <body>
        <header>
          <h1>My Team</h1>
          </header>
          <main>
          ` +
    getEmployeesMarkup(employees) +
    `
          
        </main>
      </body>
    </html>`
  );
}

module.exports = generatePage;
