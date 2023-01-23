// Getting all the divs with class circle and placing them in an object called circles
const circles = document.querySelectorAll(".circle");
let wheel = document.querySelector("#wheel");


// Creating a constant variable to represent 45 degrees in radians and the radius of the wheel
const theta  = Math.PI / 6.0 ;
const wheel_radius = 190;

//new coordinates of the small circles on the big circle
let new_x = 0.0;
let new_y = 0.0;
let new_theta = 0.0;

// Defining the centre of the big circle
const centre = {
    x: 145,
    y: 145
}

circles.forEach((circle, index) => {
    new_theta = theta * index ;
    new_x = (wheel_radius * Math.cos(new_theta));
    new_y = (wheel_radius * Math.sin(new_theta));
    circle.style.left = `${centre.x + new_x}px`;
    circle.style.top = `${centre.y + new_y}px`;
});
