function setup() {
    createCanvas(2000, 2000)
    background(227, 179, 275);
}

let state = "circles!"
let state2 = "on"

function draw() {
    if (state2 === "on") {
        {
            let r = random(0, 255);
            let g = random(0, 255);
            let b = random(0, 255);
            let opacity = random(120, 180);
            fill(r, g, b, opacity);
            noStroke();

            let size = random(5, 35);
            let offSetX = random(-25, 25);
            let offSetY = random(-25, 25);

            if (state === "circles!") {
                ellipse(mouseX + offSetX, mouseY + offSetY, size, size);
            }
            if (state === "squares!") {
                rect((mouseX + random(-25, 25)), (mouseY + random(-25, 25)), size, size);
            }
            if (state === "triangles!") {
                triangle((mouseX + random(-25, 25)), (mouseY + random(-25, 25)), (mouseX + random(-25, 25)), (mouseY + random(-25, 25)), (mouseX + random(-25, 25)), (mouseY + random(-25, 25)))
            }

        }
    }

    else if (state2 === "off") {

    }

    fill(150, 40, 150);
    rect(0, 0, 100, 100);
    fill(255, 126, 0);
    triangle(25, 75, 75, 75, 50, 15);
    fill(255, 255, 255);
    rect(45, 60, 10, 10);
    rect(45, 30, 10, 20);
}

function mouseClicked() {
    if (state2 === "on" && mouseX > 100 && mouseY > 100) {
        state2 = "off"
    }

    else if (state2 === "off" && mouseX > 100 && mouseY > 100) {
        state2 = "on"
    }

    if (
        mouseX > 0 && mouseX < 100 &&
        mouseY > 0 && mouseY < 100
    ) {
        background(227, 179, 275);
    }

    else if (state === "circles!") {
        state = "squares!"
    }
    else if (state === "squares!") {
        state = "triangles!"
    }
    else if (state === "triangles!") {
        state = "circles!"
    }
}