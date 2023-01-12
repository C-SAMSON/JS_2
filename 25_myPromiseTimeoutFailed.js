const sleepThrow = (milliseconds, boolean) => {
    return new Promise((resolve, reject) => setTimeout(() => {    
    if (boolean === true) {
        resolve("success");
    } else {
        reject("error");
    }}, milliseconds))
}

try{module.exports = sleepThrow;}catch(e){}