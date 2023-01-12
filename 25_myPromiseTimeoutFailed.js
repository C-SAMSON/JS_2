const sleepThrow = (milliseconds, boolean) => {
    return new Promise((resolve, reject) => setTimeout(() => {    
    if (boolean === false) {
        reject("error");
    } else {
        resolve("success")
    }}, milliseconds))
}

module.exports = sleepThrow;