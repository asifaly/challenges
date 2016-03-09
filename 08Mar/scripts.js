var resultDiv = document.getElementById("result");

//1. Reverse Words in a sentence & 2. Pig Latin
function reverseWords(n, pig) {
  var latin = pig === true ? "ay " : " ";
  var result = "";
  n = n.split(" ");

  if (pig) {
    for (i = 0; i < n.length; i++) {
      result += n[i].substr(1, n.length).concat(n[i].substr(0, 1)) + latin;
    }
  } else {
    for (i = 0; i < n.length; i++) {
      result += n[i].split("").reverse().join("") + latin;
    }
  }

  resultDiv.innerHTML = result;

}

//3. Print number without String Methods
function numPrint(n) {
  var result = [];

  for (n; n > 1; Math.floor(n /= 10)) {
    var digit = Math.floor(n % 10);
    result.push(digit);
  }
  resultDiv.innerHTML = result.reverse().join("\n");
}

//4. Guessing Game
function guessGame() {
  var attempts = 10;
  var compGuess = (Math.floor(Math.random() * 100)) + 1;
  var prevGuess = 0;
  var guessMsg = "Guess the number.";

  while (attempts > 0) {
    var promptMessage = guessMsg + " You have " + attempts + " attempts left" + compGuess;
    var userGuess = prompt(promptMessage);
    if (prevGuess == userGuess) {
      guessMsg = "You tried this number last time, try a different one. ";
    } else {
      if (userGuess == compGuess) {
        alert("You guessed it right, the number was " + compGuess + " indeed!");
        break;
      } else if (userGuess > compGuess) {
        guessMsg = "Your guess was higher, try again.";
      } else {
        guessMsg = "Your guess was lower, try again.";
      }
      attempts -= 1;
      prevGuess = userGuess;
    }
  }
  alert("Game over! Better luck next time!. The number was " + compGuess);
}

function printWords(numb) {

  resultDiv.innerHTML = "<p>" + printWord(numb) + "</p>";

  function printWord(digit) {

    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var tenones = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (digit < 10) {
      return ones[digit];
    } else if (digit < 20) {
      onesPlace = digit % 10;
      return tenones[onesPlace];
    } else if (digit < 100) {
      tensDigit = Math.floor(digit / 10);
      onesDigit = digit % 10;
      return tens[tensDigit - 2] + ' ' + ones[onesDigit];
    } else if (digit < 1000) {
      hundDigit = Math.floor(digit / 100);
      hundRemainder = digit % 100;
      return printWord(hundDigit) + ' hundred ' + printWord(hundRemainder);
    } else if (digit < 1000000) {
      thouDigit = Math.floor(digit / 1000);
      thouRemainder = digit % 1000;
      return printWord(thouDigit) + ' thousand ' + printWord(thouRemainder);
    } else if (digit < 1000000000) {
      millDigit = Math.floor(digit / 1000000);
      millRemainder = digit % 1000000;
      return printWord(millDigit) + ' million ' + printWord(millRemainder);
    } else if (digit < 1000000000000) {
      billDigit = Math.floor(digit / 1000000000);
      billRemainder = digit % 1000000;
      return printWord(billDigit) + ' billion ' + printWord(billRemainder);
    }
  }


}