// Try to reverse a string using split, reverse and join methods
try {
    var sReverse = s.split("").reverse().join("")
    console.log(sReverse)
}
// If an exception is thrown, catch it and print the contents of the exception's message on a new line
catch (e) {
    console.log(e.message)
// Print string on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string 
    console.log(s)
}
