const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname);

const output = path.join(dirpath, "out.txt");
fs.writeFileSync(output, ""); // Clear the output file

for (let i = 1; i <= 10; i++) {
 // Correct string interpolation
    const joinfile = path.join(dirpath, `txt${i}.txt`); 
  if (fs.existsSync(joinfile)) {

    const textIN = fs.readFileSync(joinfile, "utf-8"); 
    // Split content into lines
    const lines = textIN.split("\n"); 
    // Get the first 'i' lines
    const newlines = lines.slice(0, i); 
    // Append lines to output file
    fs.appendFileSync(output, `\n${newlines.join("\n")}`); 
  }
}

console.log("The lines are completed");
