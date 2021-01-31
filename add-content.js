 var numofppl = prompt("How many people will your cake feed? ");

 if (numofppl <= 3 && numofppl > 0)
  {
     var orderdetails = " Cake Size : Small <br> Price: 5 JD"
 }
 else if (numofppl <= 8 && numofppl > 3) {
     var orderdetails = " Cake Size : Meduim <br> Price: 10 JD"
 }
 else if (numofppl <= 15 && numofppl > 8) {
     var orderdetails = " Cake Size : Large <br> Price: 25 JD"
 }

var kindsweet = prompt("What do you want cake or cookie?");


while (kindsweet !== 'cake' && kindsweet !== 'cookie')
 {
    kindsweet=prompt("What do you want cake or cookie?");
}

 var itemkindsweet = '';
  
 if (kindsweet === 'cake') {
     itemkindsweet = '<img src= "images/cake.jpg" border="0" wedith="300">' ;
     
}
 else if (kindsweet === 'cookie') {
     itemkindsweet = '<img src="images/cookie.jpg"border="0" wedith="300">';
 }

 
 var numofppl = prompt("How many people will your cake feed?");

 var result = '';

 for (var i=0; i < numofppl; i++) {
     
     result = result + itemkindsweet;
 }

 document.write(result);

 document.write(orderdetails);


 confirm("Hope you like our service ")
 alert("Thank You And Have A GOOD Day")

 /* many line comment 

never run in broedier
*/

 // function decleration
 
 function getName()
  {
     var username = prompt('Enter your name?');
     console.log(username);
     console.log(typeof prompt);
     
    for (var i=0; i<=5; i++)
        {
            console.log(i);
        }
  }

// function calling 

     getName();

     document.write(username);
     alert(username);

