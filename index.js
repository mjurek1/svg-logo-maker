const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require("./lib/shapes");
const { choices } = require('yargs');

const userInput = [
    {
    type: "input",
    name: "name",
    message: "Enter 3 text characters to appear on the logo",
    },

    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo",
        choices: ["Triangle", "Circle", "Square"],
    },

    {
        type: "input",
        name: "color",
        message: "Enter your favorite color",
        },
]

