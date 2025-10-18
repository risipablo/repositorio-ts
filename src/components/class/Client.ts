import { Person } from "./Person";


export class Client extends Person{
    number_count: number
    private money:number

    constructor(name:string, lastname:string,  number_count:number, money:number){
        super(name, lastname)
        this.number_count = number_count
        this.money = money
    }

    print(): string {
        return `Hello ${super.print()}. Number Acount: ${this.number_count}. Money: ${this.money}`
    }

    Deposit(amount:number){
        if(amount > 0){
            this.money += amount
            
        } else {
            alert('Sorry. You only put positive number, please try again')
        }
        return `You deposited: $ ${amount}. You have in your acount: $ ${this.money}`
    }

    ExtracMoney(amount:number){
        if(this.money > 0){
            if(amount <= this.money){
                this.money -= amount
            } else {
                alert("You have insufficient funds. Please try with another minor amount")
            }
        } else {
            alert("In this moment, you havent money in your acount. Please deposit some money first")
        }

        return `Extrac Success. You retired ${amount}. Your Acount have $ ${this.money}`
    }


    ExtracAllMoney(){
        const all = this.money
        this.money = 0
        
        return `You  retired all your money. $ ${all}`
    }

    getBalance():number{
        return this.money
    }


}