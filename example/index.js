"use strict";

const pi = require("..");

// Get the first 42 digits
// Note: the `digits` array doesn't contain "3."
console.log("3." + pi.digits.slice(0, 42).join(""))
// => "3.1415926535897932384626433832795028841971"

// Get the path to the txt file (could be useful to
// other things such as streaming or whatever)
console.log(pi.txt_path)
// => "/Users/.../pi-digits/lib/pi.txt"
