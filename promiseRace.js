function promiseRace(promises){
    if(!Array.isArray(promises)){
        throw new TypeError('promises must be a array!')
    }
    return new Promise((resolve, reject) => {
        for(let i = 0 ; i< promises.length; i++){
            Promise.resolve(promises[i]).then(resolve,reject)
        }
    })
}
// test

let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})

let p4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(4)
    }, 500)
})

promiseRace([p3, p1, p2]).then(res => {
    console.log(res) // 1
})

promiseRace([p4, p1, p2]).catch(res => {
    console.error(res) // 1
})