const person = {
    name: 'Austin',
    age: '32',
    gender: 'Male',
    hairColor: 'Brown',
    eyes:'blue',
    location: {
        city: 'Orlando',
        temp: 88
    }
};

const {name, age} = person;
// const name = person.name;
// const age = person.age;
console.log(`${name} is ${age}.`);

// EXAMPLE USING PERSON.LOCATION IN MULTIPLE PLACES = MESSY
if (person.location.city && person.location.temp){
    console.log(`It's ${person.location.temp} in ${person.location.city}.`)
}

// DETRUCTURING STATEMENTS ALLOW FOR CLEANER MORE CONSICE CODE
const {city, temp} = person.location;
if (city && temp){
    console.log(`It's ${temp} in ${city}.`)
}

// WHAT IF WE WANT TO RENAME SOMETHING?
const {city: usersLocation, temp: usersTemperature} = person.location;
if (usersLocation && usersTemperature){
    console.log(`It's ${usersTemperature} in ${usersLocation}.`)
}

// DESTRUCTING DEFAULT VALUES
const {gender: usersGener = 'Undefined', hairColor: usersHairColor = 'Undefined'} = person;
console.log(`${usersGener} is ${usersHairColor}.`);



const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};
const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);



//  - - - - - - - ARRAY DESTRUCTURING - - - - - - - ARRAY DESTRUCTURING
const address = ['6308 Solstice Loop', 'Sanford', 'Florida', '32771'];

// NON DESTRUCTURED ARRAY
console.log(`You are in ${address[1]} ${address[2]}`);

// DESTRUCTURED ARRAY
const [street, town, state, zip] = address;
console.log(`You are in ${town}, ${state}`);

// SKIPPING ITEMS IN THE ARRAY - Observe how we skip items by adding a space and , 
const toy = ['car', 'size', 'Hot Wheels', 'Corvette', 'red', 'in box', '1974'];
const [ , , brand, model, color, , year] = toy;
console.log(`This toy was made by ${brand} and is a ${year} ${color} ${model}.`);