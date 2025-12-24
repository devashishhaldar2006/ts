function getDeva(kind: string | number){
    if(typeof kind==="string"){
        return `Deva ${kind}`;
    }
    return `om ${kind}`;
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving Chai`;
}
class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}
class CuttingChai{
    serve(){
        return `Serving Cutting Chai`
    }
}
function serve(chai: KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}

type ChaiOrder={
    type:string
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj==="object" &&
        obj!==null &&
        typeof obj.type==="string" &&
        typeof obj.sugar==="number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`

    }
    return `Serving ${item}`
}

type MasalaChai={type:"masala";spiceLevel: number};
type GingerChai={type:"ginger"; amount: number};
type ElaichiChai={type:"elaichi"; aroma: number};

type Chai= MasalaChai | GingerChai | ElaichiChai;

function makeChai(order:Chai){
    switch(order.type){
        case "masala":
            return `Masala chai`
            break;
        case "ginger":
            return `Ginger chai`
            break;
        case "elaichi":
            return `Elaichi chai`
            break;
    }
}

function brew(order: MasalaChai | GingerChai | ElaichiChai){
    if("spiceLevel" in order){
        // 
    }
}

// function isStringArray(arr:unknown): arr is string[]{

// }