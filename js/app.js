function Calculator(form, summ) {
    this.calculate = {
        products: 5,
        orders: 4,
        package: {
            basic: 0,
            professional: 25,
            premium: 60
        },
        accounting: 50,
        terminal: 10
    };

    this.form = {
        products: form.querySelector("#products"),
        orders: form.querySelector("#orders"),
        package: form.querySelector("#package"),
        accounting: form.querySelector("#accounting"),
        terminal: form.querySelector("#terminal")
    };

    this.summ = {
        list: summ.querySelector("ul"),
        items: summ.querySelectorAll("ul li"),
        total: {
            container: summ.querySelector("#total-price"),
            price: summ.querySelector(".total__price")
        }
    };

    this.addListener();
}

Calculator.prototype.addListener = function () {

    this.form.products.addEventListener("input", (el) => {
        const id = el.currentTarget.id;
        console.log(id);
        const value = el.currentTarget.value;
        console.log(value);
        const singlePrice = this.calculate[id];
        console.log(singlePrice);
        const totalPrice = value * singlePrice;
        console.log(totalPrice);

        const summary = this.summ.list.querySelector("[data-id=" + id + "]");
        const summaryCalc = summary.querySelector(".item__calc");
        const summaryTotal = summary.querySelector(".item__price");

        summary.classList.add("open");

        if (totalPrice === 0) {
            summary.classList.remove("open");
        }

        if (summaryCalc !== null) {
            summaryCalc.innerText = value + " * $" + singlePrice;
        }

        summaryTotal.innerText = "$" + totalPrice;
        this.summary();
    });

    this.form.orders.addEventListener("input", (el) => {

        const id = el.currentTarget.id;
        console.log(id);
        const value = el.currentTarget.value;
        console.log(value);
        const singlePrice = this.calculate[id];
        console.log(singlePrice);
        const totalPrice = value * singlePrice;
        console.log(totalPrice);

        const summary = this.summ.list.querySelector("[data-id=" + id + "]");
        const summaryCalc = summary.querySelector(".item__calc");
        const summaryTotal = summary.querySelector(".item__price");

        summary.classList.add("open");

        if (totalPrice === 0) {
            summary.classList.remove("open");
        }

        if (summaryCalc !== null) {
            summaryCalc.innerText = value + " * $" + singlePrice;
        }

        summaryTotal.innerText = "$" + totalPrice;
        this.summary();
    });


    this.form.package.addEventListener('click', (el) => {
        this.form.package.classList.toggle("open");

        const value = el.target.dataset.value;
        console.log(value);
        const text = el.target.innerText;
        console.log(text);
        const total = this.calculate.package[value];

        if (value) {

            this.form.package.dataset.value = value;

            const summary = this.summ.list.querySelector("[data-id=" + "package" + "]");
            const summaryCalc = summary.querySelector(".item__calc");
            const summaryTotal = summary.querySelector(".item__price");

            summary.classList.add("open");

            if (total === undefined) {
                summary.classList.remove("open");
            }
            if (summaryCalc !== null) {
                summaryCalc.innerText = text;
            }

            summaryTotal.innerText = "$" + total;

        }
        this.summary();
    });

    this.form.accounting.addEventListener("change", (el) => {
        const checkbox = el.currentTarget;
        console.log(checkbox);
        const id = checkbox.id;
        console.log(id);
        const singlePrice = this.calculate[id];
        console.log(singlePrice);

        const summary = this.summ.list.querySelector("[data-id=" + id + "]");
        const summaryCalc = summary.querySelector(".item__calc");
        const summaryTotal = summary.querySelector(".item__price");

        summary.classList.add("open");

        if (!el.currentTarget.checked) {
            summary.classList.remove("open");
        }

        if (summaryCalc !== null) {
            summaryCalc.innerText = " $" + singlePrice;
        }

        summaryTotal.innerText = "$" + singlePrice;
        this.summary();
    });

    this.form.terminal.addEventListener("change", (el) => {
        const checkbox = el.currentTarget;
        console.log(checkbox);
        const id = checkbox.id;
        console.log(id);
        const singlePrice = this.calculate[id];
        console.log(singlePrice);

        const summary = this.summ.list.querySelector("[data-id=" + id + "]");
        const summaryCalc = summary.querySelector(".item__calc");
        const summaryTotal = summary.querySelector(".item__price");

        summary.classList.add("open");

        if (!el.currentTarget.checked) {
            summary.classList.remove("open");
        }

        if (summaryCalc !== null) {
            summaryCalc.innerText = " $" + singlePrice;
        }

        summaryTotal.innerText = "$" + singlePrice;

        this.summary();
    });

};

Calculator.prototype.summary = function () {
    const orderSummary = this.summ.list.querySelectorAll('.open');

    console.log(this.form.products.value);

    if (orderSummary.length > 0) {
        const productSum = this.form.products.value < 0 ? 0 : this.form.products.value * this.calculate.products;
        const orderSum = this.form.orders.value < 0 ? 0 : this.form.orders.value * this.calculate.orders;
        const packageSum = this.form.package.dataset.value.length === 0 ? 0 : this.calculate.package[this.form.package.dataset.value];
        const accSum = this.form.accounting.checked ? this.calculate.accounting: 0;
        const terminalSum = this.form.terminal.checked ? this.calculate.terminal: 0;

        this.summ.total.price.innerText = "$" + (productSum + orderSum + packageSum + accSum + terminalSum);

        this.summ.total.container.classList.add('open');
    } else {
        this.summ.total.container.classList.remove('open');
    }

};

const form = document.querySelector(".calc__form");
const summ = document.querySelector(".calc__summary");

new Calculator(form, summ);










