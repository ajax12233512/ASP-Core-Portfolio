class Ellipse {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xSpeed = 1;
        this.ySpeed = 1;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    moveX() {
        if (this.x >= window.innerWidth) {
            this.xSpeed = -1;
        }
        if (this.x <= 0) {
            this.xSpeed = 1;
        }
        this.x += this.xSpeed;
    }

    moveY() {
        if (this.y >= window.innerHeight) {
            this.ySpeed = -1;
        }
        if (this.y <= 0) {
            this.ySpeed = 1;
        }
        this.y += this.ySpeed;
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}


let ellipseArr = [];

for (let k = 0; k < 10; k++) {
    let newEllipse = new Ellipse(
        Math.floor(Math.random() * window.innerWidth),
        Math.floor(Math.random() * window.innerHeight)
    )
    ellipseArr.push(newEllipse)
}


function draw() {
    background(1)
    ellipseArr.forEach((item) => {
        //Draw circle
        stroke('#b74e91');
        strokeWeight(2);
        fill(1)
        circle(item.x, item.y, 70);

        //Move circle 
        item.moveX();
        item.moveY();
    })
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}



