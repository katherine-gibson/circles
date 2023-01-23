// Getting all the divs with class circle and placing them in an object called circles
const circles = document.querySelectorAll(".circle");

// Creating a constant variable to represent 45 degrees in radians and the radius of the wheel
const theta  = Math.PI / 6.0 ;
const wheel_radius = 190;


let new_x = 0.0;
let new_y = 0.0;
let new_theta = 0.0;
let wheel_theta = 0;
const wheel = document.querySelector(".wheel");

// Defing the centre of the big circle
const centre = {
    x: parseFloat(getComputedStyle(circles[0]).left),
    y: parseFloat(getComputedStyle(circles[0]).top)
}

circles.forEach((circle, index) => {
    index +=  3;
    new_theta = theta * index ;

    new_x = `${centre.x + wheel_radius * Math.cos(new_theta)}px`
    new_y = `${centre.y + wheel_radius * Math.sin(new_theta) * -1}px` 

    circle.style.left = new_x ;
    circle.style.top = new_y;
});




document.querySelector("#button").addEventListener("click", function () {
    console.log("click")
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 50);

    function frame() {
        if (Math.floor(pos) == 5) {
            clearInterval(id);
        } else {
            pos++; 
            wheel_theta += 2*pos;
            wheel.style.transform = `translate(-50%,-50%) rotate(${wheel_theta}deg)`;
            document.querySelector(".centre").style.transform = `translate(-50%,-50%) rotate(${-1.0 * wheel_theta}deg)`;

            circles.forEach(circle => {
                circle.style.transform = `translate(-50%,-50%) rotate(${-1.0 * wheel_theta}deg)`;
            });
        }
    }


});

