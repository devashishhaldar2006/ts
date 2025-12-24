let response: any = "42";

let numericLength: number = (response as string).length; //forceful type assertion

type Book = {
  name: string;
};

let bookString = '{"name": "Crime and Punishment"}';
let bookObj = JSON.parse(bookString) as Book;
console.log(bookObj);

const inputElement = document.getElementById("username") as HTMLInputElement;

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "chai";
const strData: string = data as string;

// Never

type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }
  role;
}

function neverReturn():never {
  while (true) {}
}
