// Q1:

const name = "Adil";

const age = 17;

const occupation = "Front-End Developer";

const email = "adil123@example.com";

const phoneNumber = "123-456-7890";

const instituteName = "Jawan Pakistan";

const education = "Matric";


document.write(`
    Name: ${name} <br><br>
    Age: ${age} <br><br>
    Occupation: ${occupation} <br><br>
    Email: ${email} <br><br>
    Phone Number: ${phoneNumber} <br><br>
    Institute Name: ${instituteName} <br><br>
    Education: ${education} <br><br>
    `);



// Q2:


// var:

var a = "mohammad";

var a = "adil";

console.log(a);

var a = "mohammad";


// blockscope (var keyword):

var firstName = "adil";

{
    var firstName = "muhammad";
    console.log(firstName);
}

console.log(firstName);


// blockscope (let keyword):

let firstName = "adil";

{
    let firstName = "muhammad";
    console.log(firstName);
}

console.log(firstName);


// blockscope (const keyword):

const firstName = "adil";

{
    const firstName = "muhammad";
    console.log(firstName);
}

console.log(firstName);


// reassign (var keyword):

var num = 50;

num = 100;

console.log(num);


// reassign (let keyword):

let num = 50;

num = 100;

console.log(num);


// reassign (const keyword):

const num = 50;

num = 100;

console.log(num);


// reinitialize (var keyword):

var firstName = "Muhammad";

var firstName = "Adil";

console.log(firstName);


// reinitialize (let keyword):

let firstName = "Muhammad";

let firstName = "Adil";

console.log(firstName);


// reinitialize (const keyword):

const firstName = "Muhammad";

const firstName = "Adil";

console.log(firstName);


// hoisting (var keyword):

console.log(firstName);

var firstName = "adil";


// hoisting (let keyword):

console.log(firstName);

let firstName = "adil";


// hoisting (const keyword):

console.log(firstName);

const firstName = "adil";


// function scope (var keyword):

function num() {
    var nums = 10;
    console.log(nums);
}

num();


// function scope (let keyword):

function num() {
    let nums = 10;
    console.log(nums);
}

num();


// function scope (const keyword):

function num() {
    const nums = 10;
    console.log(nums);
}

num();




// --------------------------------------- THE END -----------------------------------