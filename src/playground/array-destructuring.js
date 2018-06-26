const address = ['1200 S Gandhi Street', 'Ahmedabad', 'Gujrat', '380015'];

const address1 = [];

const [street, city, state, zip] = address;

const [, , state1] = address;

console.log(`You are in ${city} ${state}.`);


console.log(`You are in ${state1}.`);


// set-up default

const [, , state2 = 'New York'] = address1;

console.log(`You are in ${state2}.`);

// Challenge

console.log('Challenge')

const item = ['Coffee (hot)', '$1.50', '$2.00', '$2.50']

const [itemName, , mediumPrice] = item

// console.log(`A medium Coffee (hot) costs $2.50`);

console.log(`A ${itemName} costs ${mediumPrice}`);

