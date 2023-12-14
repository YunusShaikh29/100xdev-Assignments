
const fs = require('fs')

fs.readFile('messy-text-file.txt', 'utf-8', function(err, data){
    const cleanedData = data.replace(/\s+/g, ' ')

    fs.writeFile('messy-text-file.txt', cleanedData, 'utf-8', (err) => {
        console.log('Data written to the file successfully!')
    })
})