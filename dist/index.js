"use strict";
let person = [1, 'Steve'];
person.push(1);
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 0.2;
    }
    return income * 0.4;
}
let emmployee = { id: 1,
    name: 'Nisma',
    retire: (date) => {
        console.log(date);
    }
};
let employee = { id: 1,
    name: 'Nisma',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseFloat(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => console.log('dragging'),
    resize: () => console.log('resizing')
};
let quantity = 50;
let metric = 'kg';
function greet(name) {
    if (name)
        console.log('Hello ' + name.toUpperCase());
    else
        console.log('Hola!!!!!! ');
}
greet('Nisma');
function getCustomer(id) {
    return id === 0 ? null : { birthDate: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthDate);
//# sourceMappingURL=index.js.map