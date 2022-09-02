let age: number = 20;
if (age < 50) age += 10;
console.log(age);

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};


type user = {
    name: string;
    age: number;
    occupation?: string;
}

let users: user[] = [
  { name: "John Smith", age: 30, occupation: "Software engineer" },
  { name: "Kate Müller", age: 28 },
];
