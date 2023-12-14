
function terminalClock () {
    const intervalId = setInterval(() => {
        const date = new Date()
        console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`)
        // if(date.getMinutes() === 37){
        //     clearInterval(intervalId)
        // }
    }, 1000)
}

// terminalClock()

const terminalClock2 = () => {
    setInterval(function(){
        console.log(new Date().toLocaleTimeString())
    }, 1000)
}

terminalClock2()