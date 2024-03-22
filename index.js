// Global variables used as trackers later
var slider = null;
var currentSeason = "spring";

function init() {
    // CHANGING SEASONS
    slider = document.getElementById("slider");
    var BG_img = document.getElementById("BG_img");
    var snow_canvas = document.getElementById("snow_canvas");
    var leaves_container = document.getElementById("leaves_container");
    // var leaves_canvas = document.getElementById("leaves_canvas");

    // upon clicking/moving the slider, this function runs.
    slider.oninput = function() {
        if (slider.value >= 1 && slider.value <= 25) {
            currentSeason = "spring";
            BG_img.src = "images/Senior_Thesis_Map_Spring.png";
        }
        if (slider.value >= 26 && slider.value <= 50) {
            currentSeason = "summer";
            BG_img.src = "images/Senior_Thesis_Map_Summer.png";
            leaves_container.style.display = "none";
            // leaves_canvas.style.display = "none";
        }
        if (slider.value >= 51 && slider.value <= 75) {
            // initial batch of leaves
            // purpose: natural initial position. Looks better than without (straight line eww) but still a huge and separated batch is not ideal
            // if (currentSeason != "autumn") {
            //     var leaves = document.querySelectorAll(".leaf");
            //     for (var j = 0; j < leaves.length; j++) {
            //         leaves[j].style.top = Math.random()*window.innerHeight + "px";
            //         leaves[j].style.visibility = "hidden"; // just hide this batch. the subsequent leaves look natural enough.
            //     }
            // }
            currentSeason = "autumn";
            BG_img.src = "images/Senior_Thesis_Map_Autumn.png";
            snow_canvas.style.display = "none";
            leaves_container.style.display = "block";
            // leaves_canvas.style.display = "block";
        }
        if (slider.value >= 76 && slider.value <= 100) {
            currentSeason = "winter";
            BG_img.src = "images/Senior_Thesis_Map_Winter.png";
            leaves_container.style.display = "none";
            // leaves_canvas.style.display = "none";
            snow_canvas.style.display = "inline-block";
        }
    };
    slider.value = 1; // reset slider knob upon reloading webpage

    // AUTUMN LEAVES ANIMATION
    // //leaf-ified snow code
    // var leaves_context = leaves_canvas.getContext("2d");
    // // set canvas's dimensions to viewport's or the parent section's
    // var h = parseFloat(document.getElementById("BG").clientHeight);
    // var w = parseFloat(document.getElementById("BG").clientWidth);
    // leaves_canvas.clientHeight = h;
    // leaves_canvas.clientWidth = w;
    // // Leaves
    // var max_leaves = 10;
    // var leaves = [];
    // var actual_leaves = [];
    // // Random number generator in range from min to max
    // function random(min, max) {
    //     return min + Math.random() * (max - min + 1);
    // };
    // // Generate the values associated with each leaf & save them into the array
    // function setup_leaves() {
    //     for (var i = 0; i < max_leaves; i++) {
    //         leaves.push(
    //             {
    //                 x: Math.random() * w, // Math.random() generates a decimal between 0 & 1
    //                 y: Math.random() * h,
    //                 speedX: random(-11, 11),
    //                 speedY: random(7, 15),
    //                 radius: random(0.5, 4.2),
    //             }
    //         )
    //     }
    // };
    // // Use the saved values to generate leaves
    // function generate_leaves() {
    //     for (var i = 0; i < max_leaves; i++) {
    //         // var leaf = document.createElement("div");
    //         // leaf.innerHTML = '<img src="https://art.pixilart.com/sr20867d214926b.png">';
    //         // leaf.classList.add("leaf");
    //         // leaf.style.left = leaves[i].x + "px";
    //         // leaf.style.top = leaves[i].y + "px";
    //         // leaves_canvas.appendChild(leaf);
    //         // actual_leaves.push(leaf);
    //         console.log(leaves[i].x, leaves[i].y);
    //         const img = new Image(); // Create new img element
    //         img.src = "https://art.pixilart.com/sr20867d214926b.png";
    //         img.style.height = 20 + "px";
    //         img.style.width = 20 + "px";
    //         actual_leaves.push(img);
    //         leaves_context.drawImage(img, leaves[i].x, leaves[i].y);
    //     }
    // };
    // function move_leaves() {
    //     for (var i = 0; i < leaves.length; i++) {
    //         leaves[i].x += leaves[i].speedX; // move right/left
    //         actual_leaves[i].style.left = leaves[i].x + "px"; // don't forget to update the actual leaf
    //         leaves[i].y += leaves[i].speedY; // move up/down
    //         actual_leaves[i].style.top = leaves[i].y + "px";
    //         // reset leaves that went off-canvas to anywhere along the top of canvas
    //         if (leaves[i].y > h) {
    //             leaves[i].x = Math.random() * w;
    //             actual_leaves[i].style.left = leaves[i].x + "px";
    //             leaves[i].y = -50;
    //             actual_leaves[i].style.top = leaves[i].y + "px";
    //         }
    //     }
    // };
    // // A function that runs the generation and movement of snowflakes
    // function leaf_fall() {
    //     // start with a clean Context
    //     leaves_context.clearRect(0, 0, w, h); // top left coordinates of rectangle and its dimensions
    //     generate_leaves();
    //     move_leaves();
    // };
    // // Actually run the functions defined above!
    // // setInterval(leaf_fall, 50);
    // setup_leaves();
    // leaf_fall();
    
    // Copy-pasted basically word for word from old files (doesn't work at all?!)
    // var leaves_container = document.getElementById("leaves_container");
    // var leaves_range = leaves_container.clientWidth; // to expand the leaves' range to cover the whole map, which is also 2 times the initial window
    // function createLeaf() {
    //     var leaf = document.createElement("div");
    //     leaf.innerHTML = '<img src="https://art.pixilart.com/sr20867d214926b.png">';
    //     leaf.classList.add("leaf");
    //     leaf.style.left = Math.random() * leaves_range + "px";
    //     leaves_container.appendChild(leaf);
    // }
    // setInterval(createLeaf, 100);
    // var windStrength = 1;
    // var windDirection = 1;
    // function updateLeafPosition(leaf) {
    //     leaf.style.top = parseInt(leaf.style.top) + 1 + "px";
    //     leaf.style.left = parseInt(leaf.style.left) + windDirection * windStrength + "px";
    //     if (parseInt(leaf.style.top) > parseInt(document.getElementById("BG_img").clientHeight)) {
    //         leaf.remove();
    //     }
    // }
    // setInterval(function () {
    //     var leaves = document.querySelectorAll(".leaf");
    //     for (var i = 0; i < leaves.length; i++) {
    //         updateLeafPosition(leaves[i]);
    //     }
    // }, 10);
    // document.addEventListener("mousemove", (event) => {
    //     var divider = window.innerWidth / 2;
    //     var x_mouse = event.pageX;
    //     if (x_mouse > divider) {
    //         windDirection = 1;
    //     } else {
    //         windDirection = -1;
    //     }
    // });
    // document.addEventListener("mousemove", (event2) => {
    //     var divider = window.innerWidth / 2;
    //     var x_mouse2 = event2.pageX;
    //     if (x_mouse2 > divider && x_mouse2 < divider + 300) {
    //         windStrength = 1;
    //     } else if (x_mouse2 > divider + 300 && x_mouse2 < divider + 600) {
    //         windStrength = 2;
    //     } else if (x_mouse2 > divider + 600) {
    //         windStrength = 3;
    //     } else if (x_mouse2 < divider && x_mouse2 > divider - 300) {
    //         windStrength = 1;
    //     } else if (x_mouse2 < divider - 300 && x_mouse2 > divider - 600) {
    //         windStrength = 2;
    //     } else if (x_mouse2 < divider - 600) {
    //         windStrength = 3;
    //     }
    // });

    // My thorough notes on the copy-pasted from old files
    var leaves_container = document.getElementById("leaves_container");
    var leaves_range = document.getElementById("BG").clientWidth; // to expand the leaves' range to cover the whole map
    function create_leaf() {
        var leaf = document.createElement("div");
        leaf.innerHTML = '<img src = "https://art.pixilart.com/sr20867d214926b.png">';
        leaf.classList.add("leaf"); // create leaf class
        leaf.style.left = Math.random() * leaves_range + "px"; // set leaf's initial x position
        // leaf.style.top = Math.random() * -50 + "px"; // some leaves' initial y position should be off-screen?
        leaf.firstChild.style.height = Math.random() * 20 + "px";
        leaf.firstChild.style.width = Math.random() * 20 + "px";
        leaves_container.appendChild(leaf); // put this div inside the container
    }
    setInterval(create_leaf, 100); // generate a leaf every 100ms
    var wind_strength = 1;
    var wind_direction = 1;
    // make leaves follow mouse
    document.addEventListener("mousemove", (event) => {
        var divider = window.innerWidth/2;
        var x_mouse = event.pageX; // snapshots the mouse's x position relative to the whole webpage including stuff cut out by scrolling when the mouse moved
        // How much is the base wind_strength? Depends on which section of the viewport mouse is in
        if ((x_mouse > divider && x_mouse < divider + 300) || (x_mouse < divider && x_mouse > divider - 300)) {
            wind_strength = 1;
        }
        else if ((x_mouse > divider + 300 && x_mouse < divider + 600) || (x_mouse < divider - 300 && x_mouse > divider - 600)) {
            wind_strength = 2;
        }
        else if ((x_mouse > divider + 600) || (x_mouse < divider - 600)) {
            wind_strength = 3;
        }
    });
    function move_leaf(leaf) {
        leaf.style.top = parseInt(leaf.style.top) + 1 + "px"; // CSS attributes are strings!
        leaf.style.left = parseInt(leaf.style.left) + wind_direction * wind_strength + "px";
        if (parseInt(leaf.style.top) > leaves_container.clientHeight) {
            leaf.remove();
        }
    }
    // move all of the leaves
    setInterval(function(){
        var leaves = document.querySelectorAll(".leaf");
        for (var i = 0; i < leaves.length; i++) {
            move_leaf(leaves[i]);
        }
    }, 10);

    // WINTER SNOW ANIMATION
    // firstly set up by getting canvas and context
    // var snow_canvas = document.getElementById("snow_canvas");
    var snow_context = snow_canvas.getContext("2d");
    // snow_context.translate(0.5, 0.5);
    // set canvas's dimensions to viewport's or the parent section's
    var h = document.getElementById("BG").clientHeight;
    var w = document.getElementById("BG").clientWidth;
    // console.log(typeof(h), typeof(w));
    snow_canvas.height = h;
    snow_canvas.width = w;
    // console.log(snow_canvas.height, snow_canvas.width);
    // if user resizes the window, adjust canvas size
    // function resize_canvas(ev) {
    //     w = canvas.width = window.innerWidth;
    //     h = canvas.height = window.innerHeight;
    // };
    // window.addEventListener("resize", resize_canvas);
    // Particles/snowflakes
    var max_flakes = 100;
    var flakes = [];
    // Random number generator in range from min to max
    function random(min, max) {
        return min + Math.random() * (max - min + 1);
    };
    // Generate the values associated with each snowflake & save them into the array
    function setup_flakes() {
        for (var i = 0; i < max_flakes; i++) {
            flakes.push(
                {
                    x: Math.random() * w, // Math.random() generates a decimal between 0 & 1
                    y: Math.random() * h,
                    opacity: Math.random(),
                    speedX: random(-11, 11),
                    speedY: random(7, 15),
                    radius: random(0.5, 4.2),
                }
            )
        }
    };
    // Use the saved values to generate snowflakes
    function generate_flakes() {
        for (var i = 0; i < max_flakes; i++) {
            // Canvas has a function for creating a gradient between 2 circles. Create it on the Context
            var gradient = snow_context.createRadialGradient(
                flakes[i].x, // x-coordinate of starting circle's origin
                flakes[i].y, // y-coordinate of starting circle's origin
                0, // radius of starting circle
                flakes[i].x, // x-coordinate of ending circle's origin
                flakes[i].y, // y-coordinate of ending circle's origin
                flakes[i].radius
            );
            // Canvas's addColorStop function is like adding a marker on a gradient slider. Takes in position 0-1 along the "slider" and color's CSS value
            gradient.addColorStop(0, "rgba(255, 255, 255," + flakes[i].opacity + ")"); // white, but with the opacity saved in the array
            gradient.addColorStop(0.8, "rgba(210, 236, 242," + flakes[i].opacity + ")"); // light blue " "
            gradient.addColorStop(1, "rgba(237, 247, 249," + flakes[i].opacity + ")"); // even lighter blue " "
            // Draw the snowflake using arc function on Canvas Context
            snow_context.beginPath(); // this function starts drawing a new path
            snow_context.arc(
                flakes[i].x, // x-coordinate of arc's center/origin
                flakes[i].y, // y-coordinate of arc's center/origin
                flakes[i].radius, // radius of arc (arc just means partial or full circle)
                0, // starting angle
                Math.PI*2, // ending angle (circumference formula)
                false // counterclockwise/clockwise whatever lol
            );
            // var gradient is of variable type CanvasGradient, acceptable for fillStyle parameter.
            // the gradient and Context/snowflake have the same dimensions sourced from the array :)
            snow_context.fillStyle = gradient;
            snow_context.fill();
        }
    };
    function move_flakes() {
        for (var i = 0; i < flakes.length; i++) {
            flakes[i].x += flakes[i].speedX; // move right/left
            flakes[i].y += flakes[i].speedY; // move up/down
            // reset snowflakes that went off-canvas to anywhere along the top of canvas
            if (flakes[i].y > h) {
                flakes[i].x = Math.random() * w;
                flakes[i].y = -50; // negative value, thus actually off-screen so the reset snowflake doesn't appear suddenly
            }
        }
    };
    // A function that runs the generation and movement of snowflakes
    function snowfall() {
        // start with a clean Context
        snow_context.clearRect(0, 0, w, h); // top left coordinates of rectangle and its dimensions
        generate_flakes();
        move_flakes();
    };
    // Actually run the functions defined above!
    setInterval(snowfall, 50);
    setup_flakes();
}

window.onload = init; // need this line to actually run all this code.