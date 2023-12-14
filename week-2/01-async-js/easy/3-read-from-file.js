
const fs = require('fs')

fs.readFile('text-file.txt', 'utf-8', function(err, data){

    console.log('File content:', data)

    //some expensive operation 
    expensiveOperation()

    console.log('This is after the file read')
})

function expensiveOperation() {
    // Simulate an expensive operation (e.g., a loop)
    let a = 0
    for (let i = 0; i < 10000000000; i++) {
      // This loop is an example of an expensive operation
      a += i
    }
  }