var  numofppl=prompt("How many people will your cake feed? ");
if (numofppl <= 3 && numofppl >0)
 {
var orderdetails=" Cake Size : Small <br> Price: 5 JD"
}
else if (numofppl <= 8 && numofppl >3)
{
var orderdetails=" Cake Size : Meduim <br> Price: 10 JD"
}
else if (numofppl <= 15 && numofppl >8)
{
var orderdetails=" Cake Size : Large <br> Price: 25 JD"
}



document.write(orderdetails)

confirm("Hope you like our service ")
alert("Thank You And Have A GOOD Day")
