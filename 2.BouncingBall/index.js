/*Make sure the script content will be executed after the whole page is loaded*/
window.onload = function(){
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");

    var W = 350,
        H = 450;

    canvas.height = H; canvas.width = W;

    var ball = {},
        gravity = 0.2,
        bounceFactor = 0.7;

    // The ball object
    // It will contain the following details
    // 1) Its x and y position
    // 2) Redius and color
    // 3) Velocity (speed) vectors
    //
    ball = {
        x: W/2,//In the middle
        y: 25,

        radius: 15,
        color: "red",

        //Velocity components
        vx: 0,
        vy: 1,//fall straight down

        draw: function() {
            //draw the path then use arc() to draw the circle.
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    };

    //Do animation

    function clearCanvas(){
        ctx.clearRect(0, 0, W, H);
    }

    function update(){
        clearCanvas();
        ball.draw();

        //Animation time!!!
        ball.y += ball.vy;
        ball.vy += gravity;

        if(ball.y + ball.radius > H){
            ball.y = H - ball.radius;
            ball.vy *= -bounceFactor;
        }
    }

    setInterval(update, 1000/60);
}
