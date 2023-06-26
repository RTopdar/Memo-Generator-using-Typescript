import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/invoice.js'
import { Payments } from './classes/payment.js';
import { HasFormatter } from './interfaces/hasformatter.js';


const anchor = document.querySelector(`a`)!;


const form = document.querySelector(`.new-item-form`) as HTMLFormElement;


const type = document.querySelector(`#type`) as HTMLSelectElement;
const toFrom = document.querySelector(`#tofrom`) as HTMLInputElement;
const details = document.querySelector(`#details`) as HTMLInputElement;
const amount = document.querySelector(`#amount`) as HTMLInputElement;

//list template instance

const ul = document.querySelector(`ul`)!;
const list = new ListTemplate(ul);

form.addEventListener(`submit`,(e: Event)=>{
    let doc: HasFormatter;
    if (type.value=== `invoice`){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    
    e.preventDefault();
    
    list.render(doc, type.value, `end`);
});




