// console.log("hello world");

// var x = "hello";
// var y = "world";
// console.log(x + y);

// var z;
// console.log(z);

// function arr_func(item) {
//     console.log(item);
// }
// var arr = [10, 20, 30];
// arr.forEach(arr_func);
// arr.forEach(item => {
//     console.log(item);
// })

// function doStuff(data, callback) {
//     callback("done");
// }
// doStuff(true, (result)=>console.log(result));

function doStuff(data){
    return new Promise(
        (resolve, reject)=>{
            let successMessage = {
                status: 'success',
                message: 'All is well!'
            };
    
            let errorMessage = {
                status: 'error',
                message: 'Oops, there was an error!'
            };

            if(typeof data === 'boolean' && data === true){
                resolve(successMessage);
            } else {
                reject(errorMessage);
            }
        }
    )
}

doStuff(false).then(
    (successMessage) => {
        console.log(successMessage);
    },    
    (errorMessage) => {
        console.log(errorMessage);
    }
);