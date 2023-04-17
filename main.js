// // DOM: multiply table

const multiplyTable = document.getElementById("multiply-table");

const size = 10;
multiplyTable.style.borderCollapse = "collapse";

for (let i = 1; i <= size; i++) {
  const row = document.createElement("tr");
  row.style.backgroundColor = i % 2 === 0 ? "yellow" : "lightblue";

  for (let k = 1; k <= size; k++) {
    const cell = document.createElement("td");

    cell.innerText = i * k;

    row.append(cell);
    cell.style.border = "1px solid black";
    cell.style.width = "30px";
    cell.style.height = "30px";
    cell.style.textAlign = "center";
  }

  multiplyTable.append(row);
}

// // ========DOM: highlight cell======
const multiplyTable = document.getElementById("multiply-table");

const size = 10;
multiplyTable.style.borderCollapse = "collapse";

for (let i = 1; i <= size; i++) {
  const row = document.createElement("tr");
  row.style.backgroundColor = i % 2 === 0 ? "yellow" : "lightblue";

  for (let k = 1; k <= size; k++) {
    const cell = document.createElement("td");

    cell.innerText = i * k;

    row.append(cell);
    cell.style.border = "1px solid black";
    cell.style.width = "30px";
    cell.style.height = "30px";
    cell.style.textAlign = "center";

    cell.onmouseover = () => {
      cell.style.backgroundColor = "red";
    };
    cell.onmouseout = () => {
      cell.style.backgroundColor = row.style.backgroundColor;
    };
  }

  multiplyTable.append(row);
}

// // DOM: Highlight cross

const multiplyTable = document.getElementById("multiply-table");

const size = 10;
multiplyTable.style.borderCollapse = "collapse";

for (let i = 1; i <= size; i++) {
  const row = document.createElement("tr");

  for (let k = 1; k <= size; k++) {
    const cell = document.createElement("td");

    cell.innerText = i * k;

    row.append(cell);
    cell.style.border = "1px solid black";
    cell.style.width = "30px";
    cell.style.height = "30px";
    cell.style.textAlign = "center";

    cell.onmouseover = () => {

      cell.parentElement.style.backgroundColor = "red";

      const columnIndex = cell.cellIndex;
      for (let j = 0; j < multiplyTable.rows.length; j++) {

        multiplyTable.rows[j].cells[columnIndex].style.backgroundColor =
          "crimson";
          cell.style.backgroundColor = "green";
      }
    };

    cell.onmouseout = () => {
      cell.style.backgroundColor = "";
      cell.parentElement.style.backgroundColor = "";

      const columnIndex = cell.cellIndex;
      for (let j = 0; j < multiplyTable.rows.length; j++) {
        multiplyTable.rows[j].cells[columnIndex].style.backgroundColor = "";
      }
    };
  }

  multiplyTable.append(row);
}
// // ========  

// // 1.  Arrow to Functions
// // Переведіть будь-які п'ять завдань з попереднього ДЗ з функцій у синтаксис function
// // 1.1

function otvet(floorAmount, apartOnTheFloor, numOfApart) {
  object = {};
  object.entrance =
    1 + Math.trunc((numOfApart - 1) / (floorAmount * apartOnTheFloor));
  object.floor =
    1 + ((numOfApart - 1) % (floorAmount * apartOnTheFloor)) / apartOnTheFloor;
  return object;
}

otvet(
  +prompt("Введите количество этажей в доме"),
  +prompt("Введите количество квартир на этаже"),
  +prompt("Введите номер квартиры ")
);
// // 1.2

function vopros(userSurName, userName, userFatherName) {
  let answer = { userSurName, userName, userFatherName };

  for (let i in answer) {
    answer[i] = answer[i].toLowerCase().trim();
    answer[i] = answer[i][0].toUpperCase() + answer[i].slice(1);
  }
  answer.fullName = `${answer.userSurName}   ${answer.userName}  ${answer.userFatherName}`;
  console.log(answer);
}

vopros(
  prompt("Введите Вашу фамилию"),
  prompt("Введите Ваше имя"),
  prompt("Введите Ваше отчество")
);

// // 1.3
function a(text) {
  alert(text.split("\\n").join("\n"));
}
a(prompt("Введите текст. В местах предполагаемых переносов введите \\n "));

// // 1.4

function a(login, password) {
  alert(
    login === "admin" && password === "qwerty"
      ? "TRUE"
      : login === "admin"
      ? "Password wrong"
      : password === "qwerty"
      ? "Login wrong"
      : "error"
  );
}

a(prompt("Введите логин"), prompt("ВВедите пароль"));

// // 1.5

function letter(phrase) {
  let arr = phrase.split(" ");

  let word = ["оно", "того", "это"];
  let result = arr.filter((elem) => !word.includes(elem));
  console.log(result === true ? arr.join(" ") : `Попрошу не выражаться`);
}

letter(
  prompt(
    'Введите строку из  слов, разделяя их пробелами,не употребляя слова : "оно","того","это" '
  )
);

// // 2.createPerson
Створіть функцію createPerson,
 яка приймає два параметри: name та surname,
  і повертає об'єкт із ключами name, surname, getFullName.
   getFullName має бути функцією, яка працює з об'єктом через this,
    а так ж готова до того, що в об'єкті потім додати ключ fatherName

function createPerson(name, surname) {
  const person = {
    name: name,
    surname: surname,

    getFullName: function () {
      return this.fatherName
        ? `${this.name} ${this.fatherName} ${this.surname}`
        : `${this.name}  ${this.surname}`;
    },
  };
  return person;
}
const a = createPerson("Вася", "Пупкін");
const b = createPerson("Ганна", "Іванова");
const c = createPerson("Єлизавета", "Петрова");

console.log(a.getFullName()); //Вася Пупкін
a.fatherName = "Іванович";
console.log(a.getFullName()); //Вася Іванович Пупкін

console.log(b.getFullName()); //Ганна Іванова

// // 3. createPersonClosure

function createPersonClosure(name, surname) {
  let age;
  let fatherName;

  const getName = () => name;
  const getSurname = () => surname;
  const getFatherName = () => {
    return fatherName ? fatherName : " ";
  };
  const getAge = () => age;
  const getFullName = () => {
    return fatherName
      ? `${surname}  ${name}   ${fatherName}`
      : `${surname}  ${name}   " "`;
  };

  const setName = (newName) => {
    return typeof newName === "string" &&
      newName[0] === newName[0].toUpperCase()
      ? newName
      : name;
  };

  const setSurname = (newSurname) => {
    return typeof newSurname === "string" &&
      newSurname[0] === newSurname[0].toUpperCase()
      ? newSurname
      : surname;
  };

  const setFatherName = (newFatherName) => {
    return typeof newFatherName === "string" &&
      newFatherName[0] === newFatherName[0].toUpperCase()
      ? newFatherName
      : fatherName;
  };

  const setAge = (newAge) => {
    return typeof newAge === "number" && newAge >= 0 && newAge <= 100
      ? newAge
      : age;
  };

  const setFullName = (newFullName) => {
    const [newSurname, newName, newFatherName] = newFullName.split(" ");
    surname = newSurname || surname;
    name = newName || name;
    fatherName = newFatherName || fatherName;
    return `${surname} ${name} ${fatherName || " "}`;
  };

  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}
// // 4. createPersonClosureDestruct
function createPersonClosureDestruct({
  name = "Антон",
  surname = "Макаренко",
  fatherName = "Семенович",
  age = 138,
} = {}) {
  const getName = () => name;
  const getSurname = () => surname;
  const getFatherName = () => fatherName;
  const getAge = () => age;
  const getFullName = () => {
    return `${surname}  ${name}   ${fatherName} ${age}`;
  };

  const setName = (newName) => {
    return typeof newName === "string" &&
      newName[0] === newName[0].toUpperCase()
      ? newName
      : name;
  };

  const setSurname = (newSurname) => {
    return typeof newSurname === "string" &&
      newSurname[0] === newSurname[0].toUpperCase()
      ? newSurname
      : surname;
  };

  const setFatherName = (newFatherName) => {
    return typeof newFatherName === "string" &&
      newFatherName[0] === newFatherName[0].toUpperCase()
      ? newFatherName
      : fatherName;
  };

  const setAge = (newAge) => {
    return typeof newAge === "number" && newAge >= 0 && newAge <= 100
      ? newAge
      : age;
  };

  const setFullName = (newFullName) => {
    const [newSurname, newName, newFatherName] = newFullName.split(" ");
    surname = newSurname || surname;
    name = newName || name;
    fatherName = newFatherName || fatherName;
    return `${surname} ${name} ${fatherName || " "}`;
  };

  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}
const b = createPersonClosureDestruct({ name: "Миколай", age: 75 });
console.log(b.getFullName());

//   // 5.isSorted
  // Напишіть функцію isSorted, яка приймає набір параметрів будь-якого розміру,
  // та повертає true, коли всі параметри - це числа, і кожeн з них більше за попередній параметр.

  let isSorted = (...params) => {
    for (let i = 0; i < params.length - 1; i++) {
      if (typeof params[i] !== "number" || params[i + 1] < params[i]) {
        return false;
      }
    }
    return true;
  };
  isSorted(15, 20, 30, 40, 85);

  // 6.Test isSorted
  // Використовуючи циклічне введення в масив (завдання array fill), забезпечте введення даних для isSorted

  let isSorted = (...params) => {
    for (let i = 0; i < params.length - 1; i++) {
      if (typeof params[i] !== "number" || params[i + 1] < params[i]) {
        return false;
      }
    }
    return true;
  };

  let params = [];
  let someNumber;
  while ((someNumber = +prompt("Введите число"))) {
    if (someNumber === null) break;
    else {
      params.push(someNumber);
    }
  }

  isSorted(...params);

// 7.personForm

function personForm(parent, person) {
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.value = person.getName();
  parent.append(inputName);
  inputName.oninput = () => {
    inputName.value = person.setName(inputName.value);
  };

  const inputSurname = document.createElement("input");
  inputSurname.type = "text";
  inputSurname.value = person.getSurname();
  parent.append(inputSurname);
  inputSurname.oninput = () => {
    inputSurname.value = person.setSurname(inputSurname.value);
  };

  const inputFatherName = document.createElement("input");
  inputFatherName.type = "text";
  inputFatherName.value = person.getFatherName();
  parent.append(inputFatherName);

  const inputAge = document.createElement("input");
  inputAge.type = "number";
  inputAge.min = 1;
  inputAge.max = 100;
  inputAge.value = person.getAge();
  parent.append(inputAge);
  inputAge.oninput = () => {
    inputAge.value = person.setAge(inputAge.value);
  };

  const inputFullName = document.createElement("input");
  inputFullName.type = "text";
  inputFullName.value = person.getFullName();
  parent.append(inputFullName);
  inputFullName.oninput = () => {
    inputFullName.value = person.setFullName(inputFullName.value);
    inputName.value = person.getName();
    inputSurname.value = person.getSurname();
    inputFatherName.value = person.getFatherName();
  };
}

const parent = document.createElement("form");
document.body.prepend(parent);

const person = createPersonClosureDestruct({ name: "Миколай", age: 75 });
personForm(parent, person);

// getSetForm здесь не пойму как дальше !!!!!!!!

function getSetForm(parent, person) {
  const inputs = {};

  for (let key in person) {
    if (key.startsWith("get") && typeof person[key] === "function") {
      const nameOfField = key.slice(3);

      if (!inputs[nameOfField]) {
        const input = document.createElement("input");

        input.type = typeof person[key] === "number" ? "number" : "text";

        input.placeholder = nameOfField;

        input.value = person[`get${nameOfField}`]();
        parent.append(input);

        input.oninput = () => {
          person[`set${nameOfField}`](input.value);
        };
        inputs[nameOfField] = input;
      }
    }
  }
}

const parent = document.createElement("form");
document.body.prepend(parent);

const person = createPersonClosureDestruct({ name: "Миколай", age: 75 });

getSetForm(parent, person);



// Домашка по теме ЗАМЫКАНИЯ

// 1. makeProfileTimer;

const makeProfileTimer = () => {
  const timerStart = performance.now();
  return () => {
    const timerEnd = performance.now();
    return timerEnd - timerStart;
  };
};
const timer = makeProfileTimer();

alert("Вимiрюємо час роботи цього alert");
alert(timer());
const timer2 = makeProfileTimer();
prompt("");
alert(`Час роботи двух аlert та одного prompt ${timer()}`);
alert(`Час роботи prompt та попереднього alert ${timer2()}`);

// 2.makeSaver

const makeSaver = (f) => {
  const result = f();
  return () => result;
};

var saver = makeSaver(Math.random);

var value1 = saver();
var value2 = saver();

alert(`Random: ${value1} === ${value2}`);

var saver2 = makeSaver(
  () =>
    console.log("saved function called") ||
    [null, undefined, false, "", 0, Math.random()][Math.ceil(Math.random() * 6)]
);
var value3 = saver2();
var value4 = saver2();

value3 === value4;

let namePrompt = prompt.bind(window, "Як тебе звуть?");
let nameSaver = makeSaver(namePrompt);
alert(`Привіт! Prompt ще не було!`);
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);

// 3.checkResult - работает

function checkResult(original, validator) {
  function wrapper(...params) {
    let result = original.apply(this, params);

    while (!validator(result)) {
      result = original.apply(this, params);
    }

    return result;
  }

  return wrapper;
}
let RandomHigh =checkResult(Math.random,x=>x>=0.5&&x<=1);
let AlwaysSayYes = checkResult(confirm,x=>x===true)
let vopros = AlwaysSayYes("?");
  // и еще там какая то функция которую надо запустить, не пойму какая именно из прошлых ДЗ

// 4. myBind не работает!!!!!!!!!!!!====== НЕ РАБОТАЕТ=====  !!!!!

function myBind(f, thisArg, defaultValue) {
  return function(...params) {
    const newParams = defaultValue.map((val, i) => {val === undefined ? params[i]: val});
    return f.apply(thisArg, newParams);
  }
}

var pow5 = myBind(Math.pow, Math, [, 5]);
var cube = myBind(Math.pow, Math, [, 3]);

pow5(2);
pow5(4);
cube(3);

var chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9]);
chessMin(-1, -5, 3, 15);

var zeroPrompt = myBind(prompt, window, [undefined, "0"]);

var someNumber = zeroPrompt("Введіть число");

const bindedJoiner = myBind((...params) => params.join(""), null, [
  ,
  "b",
  ,
  ,
  "e",
  "f",
]);
bindedJoiner("a", "c", "d") === "abcdef";
bindedJoiner("1", "2", "3") === "1b23ef";
