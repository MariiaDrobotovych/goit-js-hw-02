const checkForSpam = function (message) {
    const normalizedMessage = message.toLowerCase();

    if (normalizedMessage.includes('spam')) {
        return true;
    } else if (normalizedMessage.includes('sale')) {
        return true;
    } else {
        return false;
    }
}

console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?')); 