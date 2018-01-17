console.log("JS file linked");
// grab the canvas by the id
let canvas = document.getElementById('myCanvas');
// canvas context will be a 2d game
let ctx = canvas.getContext('2d');

// global variables
let playerX = 350; //this is the starting x coordinate for the player 
//let laserX = playerX //this will be the position of the laser when fired, being equal to player's x coordinate will make it appear as if it is coming from the players ship
let laserY = 650; //this will be y coordinate for the bullet which will travel upwards on y axis when shot
let laserX = playerX;
// let bullets = [];
// let aliens = [];

// window.onload =()=>{
//   drawAliens();
//   player();
//   laser();
// }

let drawAliens = ()=>{
  for(let i =0; i<10;i++){
    ctx.fillStyle = 'rgb(20, 200, 30)';
    ctx.fillRect(Math.floor((Math.random()*700)+5), 30, 30, 20)
  }
}

let player = ()=>{
  ctx.fillStyle = 'rgb(20, 20, 200)'
  ctx.fillRect(playerX, 670, 30, 20)
}

let laser = ()=>{
  ctx.fillStyle = 'rgb(200, 30, 50)'
  ctx.fillRect(laserX + 10 , laserY, 10, 20);
  laserY -= 10
  setInterval(laser, 500)
  
  // if(laserY < 60){
  //   laserReset();
  // }
  // taking above code out, will get back around to this functonality when I get to CD
};


document.addEventListener('keydown', function(event){
  let key = event.which;
  if(key == 39){
    playerX = playerX + 10;
  }else if(key == 37){
    playerX = playerX - 10;
  }else if(key == 32){
    setInterval(laser, 500)  
  }
  // console.log(key)
  // console.log(playerX)
});

let laserReset = ()=>{
   laserX += 10;
   laserY = 650
}





let animateCanvas = ()=>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player();
  drawAliens();
  window.requestAnimationFrame(animateCanvas);

};
animateCanvas();






  // let count = 16;
  // let x = 30
  // let y = 30
  // for(let i = 0; i<count; i++){
  //   ctx.fillStyle = 'rgb(20, 200, 30)';
  //   ctx.fillRect(x + 50,y,30,20)
  // }

