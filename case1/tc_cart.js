"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author:Nicholas Garcia 
   Date:   
   
   Filename: tc_cart.js
	
*/
//sets inital value of ordder total to 0
var orderTotal = 0;

//stores initial HTML code in variable cart HTML making a table and table row and header
var cartHTML = "<table> \
         <tr> \
         <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> \
         </tr>";

//makes for loop for all the values in the item array
for(var i= 0; i<item.length; i++){
   //adds more HTML code to the Cart HTML varialbe and changes with each different 
   //value in array so only the prices and items go with the ones they belong with
   cartHTML += "<tr> \
         <td><img src='tc_" + item[i] + ".png' alt='item' /></td> \
         <td>" + itemDescription[i] + "</td> \
         <td>$" +itemPrice[i] + "</td> \
         <td>" + itemQty[i] + "</td>";
   //multiples the item cost and item qty to get the total of the items purches and stores it in variable itemCost
   var itemCost = itemPrice[i] * itemQty[i];
   //adds more HTML code to cart HTML and adds the total item cost and closes the table row
   cartHTML += "<td>$" + itemCost + "</td></tr>";

   //stores item cost in order total
   orderTotal += itemCost;
}

//adds moreHTML code to cartHTML varaible adds the order total to the code and finishes the table
cartHTML+= "<tr> \
         <td colspan='4'>Subtotal</td> \
         <td>$" + orderTotal + "</td> \
         </tr> \
         </table>";

//inserts everything inside the cartHTML into HTML
document.getElementById("cart").innerHTML = cartHTML;