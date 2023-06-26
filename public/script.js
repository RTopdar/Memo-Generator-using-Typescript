import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/invoice.js';
import { Payments } from './classes/payment.js';
const anchor = document.querySelector(`a`);
const form = document.querySelector(`.new-item-form`);
const type = document.querySelector(`#type`);
const toFrom = document.querySelector(`#tofrom`);
const details = document.querySelector(`#details`);
const amount = document.querySelector(`#amount`);
//list template instance
const ul = document.querySelector(`ul`);
const list = new ListTemplate(ul);
form.addEventListener(`submit`, (e) => {
    let doc;
    if (type.value === `invoice`) {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    e.preventDefault();
    list.render(doc, type.value, `end`);
});
