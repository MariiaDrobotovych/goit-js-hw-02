const checkForSpam = function (message) {
    const normalizedMessage = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');

    return normalizedMessage;
    // if (normalizedMessage.includes('spam')) {
    //     return
    // } else if (normalizedMessage.includes('sale')) {
    //     return
    // } 
}

console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?')); 