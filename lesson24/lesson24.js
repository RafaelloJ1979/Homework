// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//         }, ());
//     })
// }

// tworzenie obietnicy promise

const result = new Promise((resolve, reject) => {
    if (dataIsOk) {
        resolve(data)
    } else {
        reject('error')
    }
})


// console.log(result)

result
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })


Promise(...).then(result => {
    //obsługa rezultatu Promise'a
})

Promise(...).catch(error => {
    //obsługa błędu Promise'a
})