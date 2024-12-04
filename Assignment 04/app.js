const arrays = [
    42,
    true,
    "Hello World!",
    {
        name: "John",
        age: 25,
        isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
];


// Q1:

const stringRepresentation = arrays.map(
    elements => String(elements)
);

console.log(stringRepresentation);


// Q2:

const numberElements = arrays.filter(
    elements => typeof elements === "number"
);

console.log(numberElements);


// Q3:

arrays.forEach(elements => {
    console.log(typeof elements);
});


// Q4:

const sumOfNumbers =  arrays.reduce((sum,element) => {
    if (typeof element === "number") {
        return sum + element;
    }
    return sum;
}, 0);

console.log(sumOfNumbers);


// Q5:

const firstBoolean = arrays.find(
    element => typeof element === "boolean"
);

console.log(firstBoolean);


// Q6:

const indexOfFirstObject = arrays.findIndex(
    element => typeof element === "object" && element !== null
);

console.log(indexOfFirstObject);


// Q7:

const containsNumbers = arrays.some(
    element => typeof element === 'number'
);

console.log(containsNumbers);


// Q8:

const allStrings = arrays.every(
    element => typeof element === "string"
);

console.log(allStrings);



// -------------------------------------- THE END ----------------------------------------