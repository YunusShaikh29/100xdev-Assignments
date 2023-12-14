const fs = require("fs");

fs.readFile("text-file.txt", "utf-8", (err, data) => {
  console.log("before writing");
  fs.writeFile(
    "text-file.txt",
    "we are updating the file content!",
    "utf-8",
    (err) => {
      console.log("after writing to the file");
    }
  );
});
