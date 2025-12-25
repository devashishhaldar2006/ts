const chaiFlavours: string[]=["masala","ginger","lemon"]
const chaiPrice: number[]=[10,20]


const rating: Array<number>=[4.6,5.8]

type Chai={
    name:string
    price: number
}

const menu: Chai[]=[
    {name: "Masala",price: 12},
    {name: "Ginger",price: 15}
]

const cities: readonly string[]=["pune","mumbai"]
// cities.push("delhi")

let chaiTuple: [string,number]
chaiTuple=["masala",12]
// chaiTuple=[12,"masala"]

let userInfo: [string,number,boolean?]
userInfo=["deva",12]
userInfo=["deva",12,true]


const location: readonly[number,number]=[10,20]
// location.push(3)

const chaiItems: [name: string,price: number]=["masala",12]




// enum

enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size=CupSize.SMALL
console.log(size)

enum Status{
    PENDING=100,
    SUCCESS,
    FAILED
}






