class SVG {
    constructor() {
        this.message = ""
        this.shapeElement = ""
    }
    render(){
        return`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width ="300" height="200">${this.shapeElement}${this.message}</svg>`;
    }
    renderText(message, color){
        if(message.length > 3) {
            throw new error("please enter 3 characters")
        }
        this.message =`<text x="150" y="125" font-size= "60" text-anchor="middle" fill="${color}">${message}</text>`;
    }
    buildLogo(shape) {
        this.shapeElement = shape.render()
    }
}

module.exports = SVG