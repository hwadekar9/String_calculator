// app/string_calculator.js


exports.add = function (text) {
 
  if (text == "") {  // For empty string return 0
    return 0;
  }
  else {
    var delimiter="," ;     // default delimiter
    if (text.match("//(.*)\n(.*)")) {  // Check for a new delimiter,if there store it and modify the string
      delimiter = text.charAt(2);
      text = text.substring(4);
    }
    var str = text.replace(/\n/g, delimiter) // Replace next line characters if any
    var numbers_arr = str.split(delimiter);  // Extract numbers from the text using delimiter
    var total = 0;
    var negString = "";

    for (var i = 0; i < numbers_arr.length; i++) { // Identify negative numbers if any
      if (Number(numbers_arr[i]) < 0) {
        if (negString == "")
          negString = Number(numbers_arr[i]);
        else
          negString += ("," + Number(numbers_arr[i]));
      }

    }

    if (!(negString == "")) {  // Throw error if any negative numbers are found.

      throw new Error("negatives not allowed: " + negString);
    }

    if (numbers_arr.length == 1) { // For single number return the same number
      return Number(numbers_arr[0]);
    }
    else { // For more than two  numbers return the sum.
      return numbers_arr.reduce((partialSum, a) => Number(partialSum) + Number(a), 0)
    }
  }
  

};


