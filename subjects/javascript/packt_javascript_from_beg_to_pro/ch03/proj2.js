let catalog = [];

let item1 = {
    name: "item1",
    model: "model1",
    cost: 1,
    quantity: 1,
};

let item2 = {
    name: "item2",
    model: "model2",
    cost: 2,
    quantity: 2,
};

let item3 = {
    name: "item3",
    model: "model3",
    cost: 3,
    quantity: 3,
};

catalog.push(item1);
catalog.push(item2);
catalog.push(item3);
console.log(catalog);

console.log(catalog[2].quantity);