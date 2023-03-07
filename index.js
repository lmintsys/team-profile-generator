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
      const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
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
