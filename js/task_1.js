const names = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const logItems = function (items) {
    for (let i = 0; i < items.length; i += 1){
        console.log(`${i + 1} ${items[i]}`);
    }
    return items;
}

logItems(names);
logItems(numbers);