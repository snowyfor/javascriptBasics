const palindromes = function (arr) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // clean string (no punctiation, no space, just alphanumerical)
    const cleanedString = arr.toLowerCase()
                            .split('')
                            .filter((character => alphanumerical.includes(character)))
                            .join('');

    const reversedString = cleanedString.split('')
                                        .reverse()
                                        .join('');

    return (reversedString === cleanedString);
};

// Do not edit below this line
module.exports = palindromes;
