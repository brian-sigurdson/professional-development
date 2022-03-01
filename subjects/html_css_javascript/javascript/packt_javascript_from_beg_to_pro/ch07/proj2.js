class Prices {
    #price_item1 = 5.00;
    #price_item2 = 2.50;

    constructor(item1_count, item2_count) {
        this.item1_count = item1_count;
        this.item2_count = item2_count;
    }

    get totalCost() {
        return this.#price_item1 * this.item1_count + this.#price_item2 * this.item2_count;
    }
}

let menu = new Prices(3, 2);
console.log(menu.totalCost);