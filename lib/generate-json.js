const fs = require("fs")

fs.writeFileSync(`${__dirname}/pi.json`, JSON.stringify(
    fs.readFileSync(`${__dirname}/pi.txt`, "utf8").trim().slice(2).split("").map(Number)
))
