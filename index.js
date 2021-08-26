//print to html page
const generateHTML = require("./src/generateHTML");

//node modules
const inquirer = require("inquirer");
const fs = require("fs");

//classes of each team member
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");

const team = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "officenumber",
    message: "What is the manager's office number?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the engineer's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
];

const nextQuestion = [
  {
    type: "list",
    name: "choice",
    message: "What would you like to do next?",
    choices: ["Add a new engineer", "Add a new intern", "Finish team!"],
  },
];

const askQuestion = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    if (answers.choice) {
      if (answers.choice === "Add a new engineer") {
        askQuestion(engineerQuestions);
      } else if (answers.choice === "Add a new intern") {
        askQuestion(internQuestions);
      } else {
        console.log(team);
      }
    } else {
      team.push(answers);
      askQuestion(nextQuestion);
    }
  });
};

const init = () => {
  inquirer.prompt(managerQuestions).then((answers) => {
    team.push(answers);
    askQuestion(nextQuestion);
  });
};
init();
