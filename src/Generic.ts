function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 20);
pair("masala", { flavour: "ginger" });

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = {
  content: 42,
};
const stringBox: Box<string> = {
  content: "masala",
};

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: { flavour: "masala" },
};
