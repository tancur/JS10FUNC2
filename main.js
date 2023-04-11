// DOM: multiply table

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

// ========DOM: highlight cell======
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

// DOM: Highlight cross

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
// ========

// 1.  Arrow to Functions
// Переведіть будь-які п'ять завдань з попереднього ДЗ з функцій у синтаксис function
// 1.1

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
// 1.2

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

// 1.3
function a(text) {
  alert(text.split("\\n").join("\n"));
}
a(prompt("Введите текст. В местах предполагаемых переносов введите \\n "));

// 1.4

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

// 1.5

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

// 2.createPerson
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


// 3. createPersonClosure

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
// 4. createPersonClosureDestruct
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
    const getFullName = () => { return(
      `${surname}  ${name}   ${fatherName} ${age}`);
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

  // 5.isSorted
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

  const inputSurname = document.createElement("input");
  inputSurname.type = "text";
  inputSurname.value = person.getSurname();
  parent.append(inputSurname);

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

  const inputFullName = document.createElement("input");
  inputFullName.type = "text";
  inputFullName.value = person.getFullName();
  parent.append(inputFullName);

  inputName.oninput = () => {
    const newInputName = person.setName(inputName.value);
    inputName.value = newInputName;
  };

  inputSurname.oninput = () => {
    const newInputSurname = person.setSurname(inputSurname.value);
    inputSurname.value = newInputSurname;

  };

  inputFatherName.oninput = () => {
    const newInputFatherName = person.setFatherName(inputFatherName.value);
    inputFatherName.value = newInputFatherName;
  };

  inputAge.oninput = () => {
    const newInputAge = person.setAge(inputAge.value);
    inputAge.value = newInputAge;

  };

  inputFullName.oninput = () => {
    const newInputFullName = person.setFullName(inputName.value);
    inputFullName.value = newInputFullName;
  };
}

const parent = document.createElement("form");
document.body.prepend(parent);

const person = createPersonClosure("Ганна", "Іванова",FatherName = "Петров");

personForm(parent, person);


