// Rover Object Goes Here
// ======================




// ======================

// Iteration 1 | The Rover Object
// Create an object to represent the rover. This object will have only one property for now: the direction.

// The direction property can contain one of four values: "N", "S", "E", or "W". The rover's default direction will be "N" (as North).

// Iteration 2 | Turning the Rover

// The rover has a direction attribute. We've already provided functions named turnLeft() and turnRight(). 
// Each function receives a rover object as an argument. 
// Your job is to turn the rover in the appropriate direction based off of its current direction.

// Suggested Approach
// Begin with a switch statement. Based off of which function is being called, turn the rover in the correct direction based off of its current direction.
// Test these functions putting console logs in them which will tell you which direction is rover facing and check the output in the console of the CodePen.

// Iteration 3 | Moving the Rover
// The rover's position
// To move the rover around, we have to keep track of the rover's position.
// Positions can be represented as a pair of coordinates, x and y. Add two properties to your rover called x and y. Their default values will both be set to 0.


// Iteration 1 | The Rover Object

let rover = {
  direction: "N",
  x: 2,
  y: 4, 
  track: []
};


// Iteration 2 | Turning the Rover

function turnLeft(){
   console.log("turnLeft was called!");
    switch (rover.direction){
      case"N":
           rover.direction = "W";              
           break; 
      case"S":
           rover.direction = "E";
           break; 
      case"E":
            rover.direction = "N";
            break; 
       case"W":
            rover.direction = "S"; 
            break;        
      }
       console.log(`Rover is now ${rover.direction}.`)
  }

//turnLeft ();

function turnRight(){
   console.log("turnRight was called!");
    switch(rover.direction){
      case"N":
           rover.direction = "E";              
           break; 
      case"S":
           rover.direction = "W";
           break; 
       case"E":
            rover.direction = "S";
            break; 
       case"W":
            rover.direction = "N"; 
            break;        
      } console.log(`Rover is now '${rover.direction}'`)
  }

//turnRight();

// Iteration 3 | Moving the Rover

function moveForward(){
   console.log(`moveForward was called`);
        switch(rover.direction){
            case "N":
            if (rover.y > 0) {
                  rover.y--; 
                  rover.track.push([rover.x, rover.y]);
            }
                  break;
            case "S":
            if (rover.y < 9) { 
                  rover.y++; 
                  rover.track.push([rover.x, rover.y]);  
            }
                  break;
            case "E": 
            if (rover.x < 9) { 
                  rover.x++;
                  rover.track.push([rover.x, rover.y]);  
            }
                  break;
            case "W":
            if (rover.x > 0) { 
                  rover.x--;        
                  rover.track.push([rover.x, rover.y]); 
            }
              break;
      } 
      console.log(`The new position of the rover is (${rover.x}, ${rover.y})`);  
    }

//moveForward();


function moveBackward(){
    console.log(`moveBackward was called`);   
            switch(rover.direction){
            case "N":
            if (rover.y < 9) {
                  rover.y++; 
                  rover.travelLog.push([rover.x, rover.y]);
            }
                  break;
            case "S":
            if (rover.y > 0) { 
                  rover.y--; 
                  rover.travelLog.push([rover.x, rover.y]);  
            }
                  break;
            case "E": 
            if (rover.x > 0) { 
                  rover.x--;
                  rover.travelLog.push([rover.x, rover.y]);  
            }
                  break;
            case "W":
            if (rover.x < 9) { 
                  rover.x++;        
                  rover.travelLog.push([rover.x, rover.y]); 
            }
              break;
      } 
     console.log(`The new position of the rover is (${rover.x}, ${rover.y})`); 
  }

//moveBackward();
  
  // 4 |COMMANDS

function listOfCommands(str){
    for (var i=0; i<str.length; i++){
      if (str[i] === "l"){
          turnLeft();
       } else if(str[i] === "r"){
          turnRight();
       } else if(str[i] === "f"){
          moveForward();
       } else if(str[i] === "b"){
          moveBackward(); 
       } else {
         console.log("Invalid input: Please use only 'l', 'r', 'f', or 'b'.");
      }    
    }
  } 
    
  listOfCommands("rffrfbfflfrb");
  
  //console.log(rover); 
