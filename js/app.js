console.log("JS file linked");
// grab the canvas by the id
const canvas = document.getElementById('myCanvas');
// canvas context will be a 2d game
const ctx = canvas.getContext('2d');

// // global variables
const playerX = 350; //this is the starting x coordinate for the player 


const laserX = playerX //this will be the position of the laser when fired, being equal to player's x coordinate will make it appear as if it is coming from the players ship


const laserY = 650; //this will be y coordinate for the bullet which will travel upwards on y axis when shot

//the array that will be populated when a laser is fired by the user. It will be depopulated when the laser either hits the top of the screen or one of the aliens
const laserArray = [];

//the array that will be populated when the game loads with all of the avliable aliens
const alienArray = [];


//constructor function for the aliens
function Aliens (x, y, ){
  this.x = x;
  this.y = y;
  // this.dx = dx;
  // this.dy = dy;

  this.draw = ()=>{
    ctx.fillStyle = 'rgb(20, 230, 30)'
    ctx.fillRect(this.x, this.y, 30, 20);
  },



  this.update = ()=>{
    // if(this.x  > 700 || this.x < 0){
    //   this.dx = -dx
    // }
    // if(this.x + 5 > 700 || this.x - 5 < 0){
    //   this.dy = -dy;
    // }
    // this.x += dx;
    // this.y -= dy;
    this.draw();
  }
}


for(let i = 0; i < 10; i++){
  x = 100;
  y = 10;
  let row = 5;
  let col = 10;
  //this loop is going to create the rows
  for(let i=0; i < row;i++){
    //this loops will create the columns within the rows
    for(let j=0; j<col; j++){
      //here we instantiate the aliens constructor 
      alienArray.push(new Aliens(x, y))
       // after every new alien in the col we are moving the next one to the right
      x += 50;
    }
    //this should bring our next row down 30 pixsels
    y += 30;
        //this starts every new column in its original starting place
    x = 100
  }
}


// let how = ()=>{
//   ctx.fillStyle = 'rgb(20,230,30)';
//   ctx.fillRect(100,100,10,20)
// }

let player = ()=>{
  ctx.fillStyle = 'rgb(20, 20, 200)'
  ctx.fillRect(playerX, 670, 30, 20)
}


// function laser (x, y, dy) {
//   this.x = playerX + 10;
//   this.y = y;
//   this.dy = dy;
//   this.update();

//   this.draw = ()=>{
//     ctx.fillStyle = 'rgb(200, 30, 50)';
//     ctx.fillRect(this.x, this.y, 10, 20);
//   }

//   this.update=()=>{
//   //starting coordinate
//   let y = 670;
//   //the velocity that the laser is going to travel
//   let dy = 10;
//   y -= dy
//     this.draw();
//   }


// };

function Laser (x, y, dy){
  this.x = laserX +10;
  this.y = laserY;
  this.dy = dy;


  draw = ()=>{
    ctx.fillStyle = 'rgb(200, 30, 50)';
    ctx.fillRect(this.y, this.x, 10, 20)
  }

  update =()=>{

  }

}


document.addEventListener('keydown', function(event){
  let key = event.which;
  if(key == 39){
    playerX = playerX + 10;
  }else if(key == 37){
    playerX = playerX - 10;
  }else if(key == 32){ 
    // laserArray.push(new laser)
  }
});







let animateCanvas = ()=>{
  window.requestAnimationFrame(animateCanvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i=0; i < 10; i++) {
    alienArray[i].update();
  }
  player();
};
animateCanvas();








