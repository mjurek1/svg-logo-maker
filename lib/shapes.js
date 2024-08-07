class Shape {
    constructor(){
        this.color = ""
    }
    setColor(color){
        this.color = color}
    }

class Triangle extends Shape {
    render() {
        return`<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180 fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render() {
        return`<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return`<rect x="150" y="150" width="150" height="150" fill="${this.color}"/>`
    }
}

console.log("shape");

module.exports = {Triangle, Circle, Square};