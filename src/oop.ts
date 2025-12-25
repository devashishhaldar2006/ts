// class Chai{
//   flavour: string
//   price: number  

// //   constructor(flavour:string,price:number){
// //     this.flavour=flavour
// //     this.price=price
// //   }
//   constructor(flavour:string,price:number){
//     this.flavour=flavour
//     this.price=price
//   }
// }

// const masalaChai=new Chai()
// masalaChai.flavour="masala"
// masalaChai.price=12

// access modifiers

class Chai{
    public flavour: string="Masala"
    private secretIngredients="Cardamom"

    reveal(){
        return this.secretIngredients
    }
}

class Shop{
    protected shopName="Chai Corner"
}

class Branch extends Shop{
    getShopName(){
        return this.shopName
    }
}

const c=new Chai()
console.log(c.flavour)
// console.log(c.secretIngredients)
console.log(c.reveal())


class Walet{
    #balance=100

    getBalance(){
        return this.#balance
    }
}

const w=new Walet()
console.log(w.getBalance())
// console.log(w.#balance)


class Cup{
    readonly capacity: number=250
    constructor(capacity:number){
        this.capacity=capacity
    }
}


class ModernChai{
    private _sugar=2

    get sugar(){
        return this._sugar
    }
    set sugar(s:number){
        this._sugar=s
    }
}

class EkChai{
    static shopName="Chai Corner"

    constructor(public flavour:string){}
}

console.log(EkChai.shopName)


abstract class Drink{
    abstract brew():void;

    serve():string{
        return "Serving Drink"
    }
}

class Coffee extends Drink{
    brew(): void {
        console.log("Brewing Coffee")
    }
}

class Tea extends Drink{
    brew(): void {
        console.log("Brewing Tea")
    }
}


// composition

class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater:Heater){}

    make(){
        this.heater.heat()
    }
}




