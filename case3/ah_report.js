"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:Nicholas Garcia  
   Date:   
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
//sets donation total equal to zero
var donationTotal = 0;

//applies the foreach method to the donors and cals back the function calcsum to find to calc donation total
donors.forEach(calcSum);

//adds the html code of a table to insert the total donors and total donations made 
var summaryTable = "<table> \
            <tr><th>Donors</th><td>"+donors.length+"</td></tr> \
            <tr><th>Total Donations</th><td>$"+donationTotal.toLocaleString()+"</td></tr> \
            </table>";
//places this table in summaryTable variable into the HTML in the id donationSummary
document.getElementById("donationSummary").innerHTML = summaryTable;

//makes the variable majorDonors and gets the donors array and filters them with the findMajorDonors function to find the major ones 
var majorDonors = donors.filter(findMajorDonors);
//orders the majorDonors in decending order
majorDonors.sort(donorSortDescending);

//makes a variable DonorTable that adds the HTML code for a new table and adds the heading of the 
//table that labels the ajor donors and who they are
var donorTable = "<table> \
         <caption>Major Donors</caption> \
         <tr> \
            <th>Donation</th><th>Donor ID</th> \
            <th>Date</th><th>Name</th><th>Address</th> \
            <th>Phone</th><th>E-Mail</th> \
         </tr>";
//For each major donor it makes them a row in this table by taking the major donors and applies 
//the functions writeDonorRow and does it for each
majorDonors.forEach(writeDonorRow);
//closes the table 
donorTable += "</table>";

//inserts the donorTable into the html with the id donorTable
document.getElementById("donorTable").innerHTML = donorTable;



function calcSum(donorAmt) {
   donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
   return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
   return b[9] - a[9];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString() + "</td>";   
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";  
   donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6]  + "</td>";    
   donorTable += "<td>" + value[7] + "</td>";   
   donorTable += "<td>" + value[8] + "</td>";         
   donorTable += "</tr>";
}

