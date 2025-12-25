const chai = {
  name: "masala chai",
  price: 20,
  isHot: true,
};

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "masala chai",
  price: 20,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "water", "milk"],
};

type Cup = { size: string; material?: string };
let smallCup: Cup = { size: "200ml" };
let bigCup: Cup = { size: "500ml", material: "plastic" };
smallCup = bigCup;

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "deva",
  password: "123",
};

type Item = { name: string; price: number };
type Address = { street: string; pin: number };

type Order = {
  item: Item;
  items: Item[];
  address: Address;
};

type Om = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateOm = (updates: Partial<Om>) => {
  console.log("updating om with", updates);
};

updateOm({ price: 25 });
updateOm({ isHot: true });

updateOm({});

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Masala Chai",
  quantity: 2,
});

type Dipen = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Dipen, "name"| "price">;
