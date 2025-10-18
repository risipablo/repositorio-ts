import { IClient } from "../interface/interface";


export class Person implements IClient{
    name:string
    lastname: string

    constructor(name:string, lastname:string){
        this.name = name
        this.lastname = lastname
    }

    print(): string {
        return `Name: ${this.name}. Lastname:${this.lastname}`
    }
}