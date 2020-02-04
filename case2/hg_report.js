"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author:Nicholas Garcia 
   Date:   
   
   Filename: hg_report.js
	
*/
//Makes the cariable gameReport and stores HTML code into it with the variables from the other javascript that store the title
//and platform we are using 
var gameReport = "<h1>" + itemTitle + "</h1> \
            <h2>By:" + itemManufacturer + "</h2> \
            <img src='hg_" +itemID+ ".png' alt='id' id='gameImg' /> \
            <table> \
            <tr><th>Product Id</th><td>"+itemID+"</td></tr> \
            <tr><th>List Price</th><td>"+itemPrice+"</td></tr> \
            <tr><th>Platform</th><td>"+itemPlatform +"</td></tr> \
            <tr><th>ESRB Rating</th><td>"+itemESRB+"</td></tr> \
            <tr><th>Condition</th><td>"+itemCondition+"</td></tr> \
            <tr><th>Release</th><td>"+itemRelease+"</td></tr> \
            </table> " +itemSummary;

//makes the ratings sum variable equal 0
var ratingsSum = 0;
//makes the ratingsCount equal to the length of the ratings array
var ratingsCount = ratings.length;
//makes it so it goes through the loop and adds the value in the ratings and adds it to the ratingsSUm
for(var i = 0; i<ratings.length; i++){
   ratingsSum += ratings[i];
}
//divides the raitngs sum by the total number of ratings to get the ratings Aerage
var ratingsAvg = ratingsSum/ratingsCount;

//Makes the ratingReport equal to the html code of ratings review and adds the average and count into the code
var ratingReport = "<h1>Customer Reviews</h1> \
               <h2>"+ratingsAvg+" out of 5 stars ("+ratingsCount+" reviews)</h2>";

//makes a for loop to different ratings be places on the page
for(var i = 0; i<3; i++){
   ratingReport+= "<div class='review'> \
               <h1>"+ratingTitles[i]+"</h1> \
               <table> \
               <tr><th>By</th><td>"+ratingAuthors[i]+"</td></tr> \
               <tr><th>Review Date</th><td>"+ratingDates[i]+"</td></tr> \
               <tr><th>Rating</th><td>";
               //places number of starts the rating is 
               for(var p = 0; p<ratings[i]; p++){
                  ratingReport += "<img src='hg_star.png' />";
               }
   //adds to the rating report variable and closes the table and adds the summary and fianlly finishes the whole rating 
   ratingReport+="</td></tr></table> \
   " +ratingSummaries[i]
    +"</div>";

}
//places the gameReport into article
document.getElementsByTagName("article")[0].innerHTML = gameReport;
//places the ratingReport into aside
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;



