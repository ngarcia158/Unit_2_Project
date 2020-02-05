"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author:Nicholas Garcia 
   Date:   
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
//makes th evariable reportHTML and adds htmlcode that puts the variable raceTitle from the other javascript into an h1
var reportHTML = "<h1>"+raceTitle+"</h1>";

//makes a for loop that goes through the entire race array
for(var i = 0; i<race.length; i++){
   //sets the totalVotes variable = 0 so we can use this for storeing the total votes later
   var totalVotes = 0;

   //gets each of the variables of the votes array and applies the calcSum funstion to each to calculate the total votes
   votes[i].forEach(calcSum);  /* *** */

   //adds a table to reportHTml that adds html code that makes new eows with each itrict on it
   reportHTML += "<table> \
               <caption>"+race[i]+"</caption> \
               <tr><th>Candidate</th><th>Votes</th></tr>";
//adds the function candidate rows with the parameters i and totalvotes inserting all the info about each candidate(party, votes, and percent)
   reportHTML += candidateRows(i, totalVotes); /* *** */

   //closes the table
   reportHTML += "</table>";
}
//inserts the reportHTML into the HTML
document.getElementsByTagName("section")[0].innerHTML = reportHTML;

//makes a function to make a row for each candidate
function candidateRows(raceNum, totalVotes){
   //makes rowHTMl and empty string 
   var rowHTML = "";

   for(var j = 0; j<=2; j++){
      //Grabs the candidate name from the raceNum given from the last for statement that was given to this function and 
      //goes to which variable we are on in j for this for loop
      var candidateName = candidate[raceNum][j];

      //grabs the candidate party the same as we did with candidateName
      var candidateParty = party[raceNum][j];

         //grabs the candidate votes the same as we did with candidateName
      var candidateVotes = votes[raceNum][j];

      //calculates the percent of candidate by importing the candidate votes we aqquired in the past for variable and 
      //grabs the totalVotes from the parameters given from the last for loop
      var candidatePercent = calcPercent(candidateVotes, totalVotes);
      //adds HTMl code to row HTMl and makes a row with the candidate name, party, total votes,
      //and percent of votes swith the last variables we made in this for loop
      rowHTML += "<tr> \
               <td>"+candidateName+"("+candidateParty+")</td> \
               <td>"+ candidateVotes.toLocaleString() +"("+candidatePercent.toFixed(1)+")</td>" ;
               for(var k = 0; k<candidatePercent; k++){
                  rowHTML += createBar(candidateParty);
               }
               //closses the row
            rowHTML+="</tr>";
   }
   return rowHTML;
}


/* Callback Function to calculate an array sum */
function calcSum(value) {
   totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
   return (100*value/sum);
}

//makes the bar a different color and size depending on the party
function createBar(partyType){
   var barHTML = "";
   switch(partyType){
   case 'D':
      barHTML = "<td class='dem'></td>";
      break;

   case 'R':
      barHTML = "<td class='rep'></td>"
      break;

   case 'I':
      barHTML = "<td class='ind'></td>";
      break;
   }
   return barHTML;
}