// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
    counter1 has a its variable within the function. While counter2 has its variable in the outer scope a.k.a. the closure

  2. Which of the two uses a closure? How can you tell?
    Counter1 code uses closure because the count variable is not defined in the function's scope, the function looked outside of its scope and referenced the variable count, which is in the outer scope.

  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
    counter1 is preferable because it only iterates once and is within the function scope.
    counter2 is not to me, because the count variable can be accessible on other functions.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){

  // Google says there are 9 innings in baseball with 3 outs to score as many runs
  // toFixed() will support a larger range of values -- toFixed() default: 0
  return ((Math.random() * 3));
}

console.log(inning());



/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 


// Refer to Hockey game function from lecture

function finalScore(inningcb, inningsNum) {

  // creating variables that will be updated
  let homeScore = 0;
  let awayScore = 0;

  // create a for loop to loop to if a team scores
  for (let i = 0; i < inningsNum; i++) {
    homeScore = homeScore + inningcb();
    awayScore = awayScore + inningcb();
  }

  // Returning outside of the loop
  return {
    Home: homeScore,
    Away: awayScore
  }
}

console.log(finalScore(inning, 9));

/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */

function getInningScore(inningcb) {
  return{
    Home: inningcb(),
    Away: inningcb()
  }
}

console.log(getInningScore(inning));


/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

// Reference from Breakout room code
function scoreboard(inningScorecb, inningcb, numOfInnings) {
  // first step
  const scoreByInning = [];

  // Create variables will be update
  let homeScore = 0;
  let awayScore = 0;

  // for loop
  for(let i =0; i < numOfInnings; i++) {

    // invoking currentInning 
    const currentInning = inningScorecb(inningcb)

    // updating variab;es 
    homeScore = homeScore +  currentInning.Home
    awayScore = awayScore + currentInning.Away

    // pushing scores into array form
    scoreByInning.push(`Inning ${i + 1}: AWAY ${awayScore} and HOME ${homeScore}`)
  }

  // If scores are tied || Extra innings
  if(homeScore === awayScore) {
    scoreByInning.push(`This game will require extra innings: AWAY ${awayScore} and HOME ${homeScore}`);

    // if a team wins a game
  } else {
    scoreByInning.push(`Final Score: AWAY ${awayScore} and HOME ${homeScore}`);

  }

  // Outside of the loop if I want the array back
  return scoreByInning;
}

console.log(scoreboard(getInningScore, inning, 9))




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
