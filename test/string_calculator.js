// test/string_calculator.js

var expect = require("chai").expect;
var assert = require("chai").assert;
var string_calculator = require("../app/string_calculator");


describe("String input", function () {

  it("for empty string should return 0", function () {
    var empty_str = string_calculator.add("");

    expect(empty_str).to.equal(0);

  });
  it("for single number should return number itself", function () {
    var single_number = string_calculator.add("3");

    expect(single_number).to.equal(3);

  });
  it("for two numbers should return sum", function () {
    var two_numbers = string_calculator.add("3,5");

    expect(two_numbers).to.equal(8);

  });
  it("for two numbers should return sum", function () {
    var multiple_numbers = string_calculator.add("1,2,3,4,5,6,7,8,9,10");

    expect(multiple_numbers).to.equal(55);

  });
  it("for string with back slash character , it should ignore the character", function () {
    var back_slash = string_calculator.add("1\n2,3");

    expect(back_slash).to.equal(6);

  });
  it("for a change in the delimiter, it should split the string based on the new delimiter", function () {
    var change_delimiter = string_calculator.add("//;\n1;2");

    expect(change_delimiter).to.equal(3);

  });
  it("for negative values, it should throw error", function () {

      expect(() => {
        string_calculator.add("-1,2,-3");
       }).to.throw("negatives not allowed: -1,-3");
      });
    
  });




