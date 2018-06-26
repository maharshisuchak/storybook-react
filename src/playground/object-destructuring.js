
const person = {
    name: 'Tarang',
    // surname:'Sachdev',
    age: 25,
    location: {
        city: 'Ahmedabad',
        temp: 92
    }
}


// console.log(`${person.name} is ${person.age}.`)

// const name = person.name;
// const age = person.age;


const { name, age } = person;
console.log(`${name} is ${age}.`)

const { city, temp } = person.location;
// with object destructuring 

// if (person.location.city && person.location.temp) {
//     console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }

if (city && temp) {
    console.log(`It's ${temp} in ${city}`);
}


// 2.feature :- renaming the cosnt variable
const { temp: temprature } = person.location;

// here we can not use temp , we must us temprature
if (city && temprature) {
    console.log(`It's ${temprature} in ${city}`);
}

// 3 : ability to set up default value

const { surname: lastName = 'Anonymous' } = person;
console.log(`${name} ${lastName} is ${age}.`)



