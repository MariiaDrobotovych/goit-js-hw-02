const phrase1 = 'Proin sociis natoque et magnis parturient montes mus';
const phrase2 = 'Donec orci lectus aliquam est magnis';
const price1 = 10;
const price2 = 20;
const price3 = 40;

const calculateEngravingPrice = function (message, pricePerWord) {
    const words = message.split(' ');
    const totalPrice = words.length * pricePerWord;

    return totalPrice;
}
const r1 = calculateEngravingPrice(phrase1, price1);
console.log(r1);

const r2 = calculateEngravingPrice(phrase1, price2);
console.log(r2);

const r3 = calculateEngravingPrice(phrase2, price3);
console.log(r3);

const r4 = calculateEngravingPrice(phrase2, price2);
console.log(r4);
