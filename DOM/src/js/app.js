import {Purchase} from "./lib.js";

const inputNameEl = document.getElementById('name');
const inputPriceEl = document.getElementById('price');
const inputCategoryEl = document.getElementById('category');
const buttonEl = document.getElementById('add');
const purchasesEl = document.getElementById('purchases');
const totalEl = document.getElementById('total');
const countEl = document.getElementById('items-count');

let count = 0;
const purchasesList = [];
// ctr + alt + l -
buttonEl.addEventListener('click', () => {
    const name = inputNameEl.value;
    const price = Number(inputPriceEl.value);
    const category = inputCategoryEl.value;

    const purchase = new Purchase(name, price, category);
    purchasesList.push(purchase);

    count++;
    countEl.textContent = count;

    const purchaseEl = document.createElement('li');
    purchaseEl.textContent = `Name: ${purchase.name}     Price: ${purchase.price}     Category: ${purchase.category}`;
    purchaseEl.className = 'list-group-item';


    const removeEl = document.createElement('button');
    removeEl.className = 'btn btn-danger btn-sm float-right';
    removeEl.textContent = 'X';
    purchaseEl.appendChild(removeEl);

    removeEl.addEventListener('click', () => {
        purchasesEl.removeChild(purchaseEl);

        count--;
        countEl.textContent = count;


    });

    recalculate();

    purchasesEl.appendChild(purchaseEl);
});

function recalculate() {
    let totalSum = 0;
    for (const purchase of purchasesList) {
        totalSum += purchase.price;
    }
    totalEl.textContent = totalSum;

    inputNameEl.value = '';
    inputPriceEl.value = '';
    inputCategoryEl.value = '';
}


