import { HasFormatter } from "../interfaces/hasformatter.js"
export class Payments implements HasFormatter {


    constructor(
        private recipient: string,
        private details: string,
        public amount: number
    ) { }
    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details} `
    }
}

