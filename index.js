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

function builder() {
    inquirer.prompt(userInput).then( (res) => {
        let shape;
        if (res.shape == "Triangle") {
            shape = new Triangle()
            const svg = new SVG()
            shape.setColor(res.color)
            svg.renderText(res.name, res.textColor)
            svg.setShape(shape)
            return fs.writeFile("logo.svg", svg.render())
        }
        else if(res.shape == "Circle")  {
            shape = new Circle()
            const svg = new SVG()
            shape.setColor(res.color)
            svg.renderText(res.name, res.textColor)
            svg.setShape(shape)
            return fs.writeFile("logo.svg", svg.render())
        }
        else if(res.shape == "Square")  {
            shape = new Square()
            const svg = new SVG()
            shape.setColor(res.color)
            svg.renderText(res.name, res.textColor)
            svg.setShape(shape)
            return fs.writeFile("logo.svg", svg.render())
        }
    })
    .then(() => {console.log("shape is built")})
}

builder()

module.exports = builder
