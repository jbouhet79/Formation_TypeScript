
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */


const sleep = async () => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000)
    })
};
module.exports = {sleep};