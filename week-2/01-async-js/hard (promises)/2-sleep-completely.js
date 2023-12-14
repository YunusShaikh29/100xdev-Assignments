/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const timeOutSideLoop = Date.now()
    return new Promise(function(resolve){
        let a = 0
        for(let i = 0; i < 100000000000; i++){
            a += i
            if(Date.now() === (timeOutSideLoop + milliseconds)){
                resolve('This is resolved')
                break
            }
        }
    })
}


async function resolvingPromise() {
    const data = await sleep(2000)
    console.log(data)
}


resolvingPromise()


















// /*
//  * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
//  * During this time the thread should not be able to do anything else.
//  * the function should return a promise just like before
//  */


// const makeThreadBusy = (milliseconds) => {

//     const timeNow = Date.now()
//     return new Promise(function(resolve){
//         let a = 0;
//         for(let i = 1; i < 1000000000000; i++){
//             a += i;
//             if(Date.now() === (timeNow + milliseconds)){
//                 resolve()
//                 break
//             }
//         }
//     })
// }



















module.exports = sleep;
