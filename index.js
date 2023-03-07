const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const generatePage = require("./src/generatePage.js");
const employees = [];

const addEmployeeMenu = [
  {
    type: "list",
    message: "What would you like to do next?",
    name: "menu",
    choices: ["Add engineer", "Add intern", "Finish building my team"],
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "Enter manager's name",
    name: "name",
    validate(value) {
      if (value && value !== /\d+/g) {
        return true;
      }

      return "Please enter a valid name";
    },
  },
  {
    type: "input",
    message: "Enter manager's employee ID",
    name: "id",
    validate(value) {
      if (isNaN(value) || value === "") {
        return "Please enter a number";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Enter manager's email",
    name: "email",
    validate(value) {
      const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/); //validate email
      if (pass && value) {
        return true;
      }
      return "Please enter a valid email";
    },
  },
  {
    type: "input",
    message: "Enter manager's office number",
    name: "officeNumber",
    validate(value) {
      const pass = value.match(
        //validate phone number
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass && value) {
        return true;
      }

      return "Please enter a valid phone number";
    },
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "Enter engineer's name",
    name: "name",
    validate(value) {
      if (value && value !== /\d+/) {
        //validate name not to have numbers and not to be empty
        return true;
      }

      return "Please enter a valid name";
    },
  },
  {
    type: "input",
    message: "Enter engineer's id",
    name: "id",
    validate(value) {
      if (isNaN(value) || value === "") {
        //validate id to be a number and not empty
        return "Please enter a number";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Enter engineer's email",
    name: "email",
    validate(value) {
      const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      if (pass && value) {
        return true;
      }
      return "Please enter a valid email";
    },
  },
  {
    type: "input",
    message: "Enter engineer's GitHub profile",
    name: "github",
    validate(value) {
      if (value) {
        return true;
      }

      return "Please enter a github profile";
    },
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Enter intern's name",
    name: "name",
    validate(value) {
      if (value && value !== /\d+/g) {
        return true;
      }

      return "Please enter a valid name";
    },
  },
  {
    type: "input",
    message: "Enter intern's id",
    name: "id",
    validate(value) {
      if (isNaN(value) || value === "") {
        return "Please enter a number";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Enter intern's email",
    name: "email",
    validate(value) {
      const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      if (pass && value) {
        return true;
      }
      return "Please enter a valid email";
    },
  },
  {
    type: "input",
    message: "Enter intern's school",
    name: "school",
    validate(value) {
      if (value) {
        return true;
      }

      return "Please enter a school's name";
    },
  },
];

//Application starts with manager questions and add a new manager to "employees" array
function addManager() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );

    employees.push(manager);

    console.log(`
    -----------------------------------------------------
     The manager ${answers.name} was added to your team
    -----------------------------------------------------
    `);
    addEmployee();
  });
}

// Ask engineer questions and add a new engineer to "employees" array
function addEngineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );

    employees.push(engineer);
    console.log(`
    -----------------------------------------------------
     The engineer ${answers.name} was added to your team
    -----------------------------------------------------
     `);
    addEmployee();
  });
}

// Ask intern questions and add a new intern to "employees" array
function addIntern() {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );

    employees.push(intern);
    console.log(`
    ---------------------------------------------------
     The intern ${answers.name} was added to your team
    ---------------------------------------------------
    `);
    addEmployee();
  });
}

// Call functions to add employees or create HTML based on user's choice from menu
function addEmployee() {
  inquirer.prompt(addEmployeeMenu).then((answer) => {
    switch (answer.menu) {
      case "Add engineer":
        addEngineer();

        break;

      case "Add intern":
        addIntern();

        break;

      case "Finish building my team":
      default:
        createHTML(employees);
        break;
    }
  });
}

// Create HTML file when user finished building team
function createHTML(employees) {
  fs.writeFile("./dist/new-team.html", generatePage(employees), (err) => {
    err
      ? console.log(err)
      : console.log(`
    -------------------------
     Your team is generated!
    -------------------------
    `);
  });
}

//Initiate app
init();

function init() {
  console.log(`
  -------------------------------------------------
   Team Profile Generator - let's build your team!
  -------------------------------------------------
  `);
  addManager();
}
