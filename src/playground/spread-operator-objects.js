
// spread operator using object spread operator
const user = {
    name: 'tarang',
    age: 14
}

console.log({
    // age: 24,
    ...user,
    lname: 'sachdev',
    location: 'Ahmedabad',
    age: 24
})


