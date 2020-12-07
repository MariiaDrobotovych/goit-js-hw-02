const a = 'Curabitur ligula sapien, tincidunt non.';
const b = 'Vestibulum facilisis, purus nec pulvinar iaculis.';
const c = 'Curabitur ligula sapien.';
const d = 'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.';

const formatString = function (string) {
    const length = string.length;
    let message = 0;

    if (length <= 40) {
        message = string;
    } else if (length > 40) {
        const end = '...';
        message = string.slice(0, 40) + end;
    }

    return message; 
};

console.log(formatString(a));
console.log(formatString(b));
console.log(formatString(c));
console.log(formatString(d));

