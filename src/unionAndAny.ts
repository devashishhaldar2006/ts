let sub: number | string = "1M"; //union

let apiRequestStatus: "pending" | "success" | "failed" = "pending";

let airlineSeat: "aisle" | "middle" | "window" = "aisle";

const orders=["12","13","14","15"];
let currentorder: string | undefined;

for(let order of orders){
    if(order=="14"){
        currentorder=order;
        break;
    }
}
// any ki jgh unkwnown likh skte ho -> relatively safe --- new update
console.log(currentorder)

