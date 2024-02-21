
let count = 1;

function counter(num){
    const intervalId = setInterval(() => {
        console.log(count++)
        if(count === num + 1){
            clearInterval(intervalId)
        }
    }, 1000)
    
}

counter(30)