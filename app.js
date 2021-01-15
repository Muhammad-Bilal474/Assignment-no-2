// Chapter no 21(Changing case)



// Question 1

// var input = prompt("Enter your name");

// var x = input.toUpperCase();

// alert(x);



// Question 2


// var input = prompt("Enter you full name");

// var spacefind = input.indexOf(" ");

// var x = input.slice(0,1).toUpperCase() + input.slice(1,spacefind) + " " + input.slice(spacefind++,spacefind+1).toUpperCase() + input.slice(spacefind+1);

// alert(x);




// Chapter no 22(Strings: measuring length and extracting parts)


// Question 1

// var input = prompt("Enter your favourite  mobile phone model");
// var x = input.length;

// alert(x);



// Question 2

// var input = prompt("Enter your name here");
// var x = input.charAt(input.length-1);

// alert(x);



// Chapter no 23 (Strings: finding segments)

// Question 1

// var x = "Pakistani";

// var y = x.indexOf("n");

// document.write(y);


// Question 2 

// var a = prompt("Enter your name")
// var b = ["@","!","&","(",")"];
// for(var i = 0 ; i <=a.length ; i++){
//     if(a(i) >="charCodeAt(33)" && a(i) <="charCodeAt(47)" || a(i) > "charCodeAt(58)" && "charCodeAt(64)" || a(i) > "charCodeAt(91)" && a(i) < "charCodeAt(96)" ){
//         alert("Enter valid username")
//     }
// }
// for(var i = 0 ; i <=a.length ; i++){
//     if(a(i) >= a.charCodeAt(65) && a(i)< a.charCodeAt(90) || a(i) >= charCodeAt(97) && a(i) <=charCodeAt(122)){
//         alert("Enter valid username")
//     }
// }

// for(var i = 0 ; i <=a.length ; i++){
//     for(var j = 0 ; j <=b.length ; j++){
//         if(a(i) === b[j]){
//             alert("Enter valid username")
//         }
//     }

// }


// Question 3  



// var x = "“The quick brown fox jumps over the lazy dog”";

// var y = x.indexOf("the");

// alert(y);


// Chapter no 24 (Strings: finding a character at a location)

// Question 1


// var x = "Pakistani";
// var y = x.charAt(3);

// document.write(y);



// Chapter no 25 (Strings: replacing characters)

// Question 1

// var input = "Hyderabad";
// var x = input.replace("Hyder","Islam");

// document.write(x);


// Question 2

// var input ="“Ali and Sami are best friends. They play cricket and football together.”"
// var x = input.replace(/and/g,"&");

// document.write(x);


// Chapter no 26  (Rounding numbers)

// Question 1

// var input =prompt("Enter the negative number" , -3.45214)

// var x = Math.round(input);
// document.write("<h1> " + "Math Round" + "</h1>" + "<br />" );
// document.write(  x   + "<br />");

// var x = Math.floor(input);
// document.write("<h1> " + "Math Floor" + "</h1>" + "<br />" );
// document.write(  x  + "<br />");

// var x = Math.ceil(input);
// document.write("<h1> " + "Math Ceil" + "</h1>" + "<br />" );
// document.write(  x  + "<br />");


// Question 2

// var input =prompt("Enter the positive number" , -2.648)

// var x = Math.round(input);
// document.write("<h1> " + "Math Round" + "</h1>" + "<br />" );
// document.write(  x   + "<br />");

// var x = Math.floor(input);
// document.write("<h1> " + "Math Floor" + "</h1>" + "<br />" );
// document.write(  x  + "<br />");

// var x = Math.ceil(input);
// document.write("<h1> " + "Math Ceil" + "</h1>" + "<br />" );
// document.write(  x  + "<br />");



// Chapter no 27 (Generating random numbers)


// Question 1

// var x = Math.random();
// document.write(x);


// Question 2

// var a = prompt("Enter first player");
// var b = prompt("Enter second player");

// var c = Math.random()*2;

// var d = Math.round(c);

// if(d === 1){
// document.write(a + " tails <br /> "+ b + " heads");
// }else{
// document.write(a + " heads <br />" + b + " tails");
// }


// Question 3

// var x = +prompt("Enter number from 1 to 10")
// var y = Math.random()*12;
// var z = Math.floor(y);

// if(x === z){
//     alert("Congratulations");
// }else{
//     alert("Try Again!");
// }

// Chapter no 28 (Converting strings to integers and decimals)

// Question 1


// var input =prompt("Enter your weight");
// var b = parseFloat(input);
// document.write(b + "Kgs");




// Chapter no 29 (Converting strings to numbers, numbers to strings)


// Question 1


// var x = "1999";
// var y = Number(x);

// var z = typeof(x);
// var d = typeof(y)
// document.write("Type of " + x + " "+ "is "+ z + "<br />");
// document.write("Type of " + y+ " is " +d);


// Question 2

// var x = 39.49;
// var y = x.toString();
// var z = y + ' ';
// var d = z.replace('.','')

// document.write(d + "<br />");
// document.write(typeof(d));



// Chapter no 30 (Controlling the length of decimals)

// Question 1

// var percentage = (38/90)*100;

// var control = percentage.toFixed(2);

// document.write(control);


