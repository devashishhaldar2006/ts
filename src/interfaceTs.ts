type ChaiOrder = {
  type: string;
  sugar: number;
  strong: number;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};
// classes ke liye type nhi interface bnao
// class MasalaChai implements TeaRecipe {
//   water = 10;
//   milk = 10;
// }

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type Response={ok:true} | {ok:false}
// class myRes implements Response{
//     ok:boolena=true
// }
// literal type
type TeaType = "masala" | "ginger" | "lemon"; //union

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };

type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;
// intersection
const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = {
  username: "deva",
};

const u2: User = {
  username: "OM",
  bio: "om@gmail.com",
};

type Config ={
    readonly appName: string
    version: number
}

const cfg: Config={
    appName: "Masterji",
    version: 1
}

// cfg.appName="d"
