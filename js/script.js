//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION
var choices = ["rock", "paper", "scissors"];


$(document).ready(function() {
  $("#button").click(function() {
        // Get The Users Choice
        var userChoice= $("#input").val();
        
        // Figure out computers choice
        var computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        // See who won
        if (userChoice == "rock" && computerChoice === "scissors") {
                alert("User Wins!");
        }
        if (userChoice == "rock" && computerChoice === "paper") {
                alert("Computer Wins!");
        }
        if (userChoice == "paper" && computerChoice === "scissors") {
                alert("Computer Wins!");
        }
        if (userChoice == "paper" && computerChoice === "rock") {
                alert("User Wins!");
        }
        if (userChoice == "scissors" && computerChoice === "rock") {
                alert("Computer Wins!");
        }
        if (userChoice == "scissors" && computerChoice === "paper") {
                alert("User Wins!");
        }
        if (userChoice == "rock" && computerChoice === "rock") {
                alert("Tie!");
        }
        if (userChoice == "paper" && computerChoice === "paper") {
                alert("Tie!");
        }
        if (userChoice == "scissors" && computerChoice === "scissors") {
                alert("Tie!");
        }
});      
})




