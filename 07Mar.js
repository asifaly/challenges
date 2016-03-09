//get the id of the element to output the result
var resultDiv = document.getElementById("result");

//1. Hello World
function hello() {
  resultDiv.innerHTML = "Hello World";

}

//2. Get Name and Greet
function nameGreet(name1) {
  resultDiv.innerHTML = "Hello " + name1;
}

//3. Get Name and Greet only Alice or Bob
function nameGreet1(name2) {
  if (name2 == "Alice" || name2 == "Bob") {
    resultDiv.innerHTML = "Hello " + name2;
  } else {
    resultDiv.innerHTML = "Hello";
  }

}

//4. Sum N numbers
function sumN(n2) {
  n2 = parseInt(n2);
  resultDiv.innerHTML = "The sum of numbers upto " + n2 + " is " + (n2 / 2) * (n2 + 1);
}

//5. Sum of N numbers multiple of 3 & 5 only not both
function sumSpecial(n1) {
  var sum = 0;
  for (i = 0; i < n1; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
      sum += i;
    }
  }
  resultDiv.innerHTML = "The result is " + sum;
}

//6. Multiplication Table
function multiply(which, m) {
  var upto = m || 12;
  var table = "";

  for (i = 1; i <= upto; i++) {
    table += which + " x " + i + " = " + which * i + "<br/>";
  }
  resultDiv.innerHTML = table;
}

//7. Leap year 100 years
function leap(yr) {
  yr = parseInt(yr);
  yr = (yr % 4 === 0 ? yr : yr + (4 - (yr % 4)));
  resultDiv.innerHTML = printLeap(yr, 100);

  function printLeap(start, upto) {
    var years = "";
    var year;
    for (i = 0; i <= upto; i += 4) {
      year = start + i;
      if (year % 100 !== 0) {
        years += year + "<br/>";
      } else if (year % 400 === 0) {
        years += year + "<br/>";
      }
    }
    return years;
  }
}