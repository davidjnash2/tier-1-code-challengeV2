/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');
            
// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
let highScore = 29;

// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = []; //array to hold tile objects

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
myScrabbleTiles.push({ tile: 'N', score: 1 });
myScrabbleTiles.push({ tile: 'K', score: 5 });
myScrabbleTiles.push({ tile: 'Z', score: 10 });
myScrabbleTiles.push({ tile: 'X', score: 8 });
myScrabbleTiles.push({ tile: 'D', score: 2 });
myScrabbleTiles.push({ tile: 'A', score: 1 });

console.log(myScrabbleTiles);

// 4. Remove the last tile from myScrabbleTiles.
let lostTile = myScrabbleTiles.pop();
console.log('goodbye', lostTile);

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
myScrabbleTiles.push({ tile: 'F', score: 4 });


// 6. Complete this function. It needs to be given an array of tile objects. 
// The function will use a for-loop and return the sum of all the scores in the given array.
function sumTiles(anArray) {
  let sum = 0;
  for (let i=0; i<anArray.length; i++){
    sum = sum + anArray[i].score;
  }
  return sum;
}
console.log('sumTiles returns:', sumTiles(myScrabbleTiles));


// 7. Use the function above to get the total score for myScrabbleTiles and assign the 
// value to a variable called "myScore".


// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.


// DONE!