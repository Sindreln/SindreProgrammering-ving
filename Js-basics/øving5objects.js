
let person = {
    name: 'Sindre',
    age: 30
};

//Dot Notation
person.name = 'Gunnar';

//Bracket Notation
let selection = 'name';
person ['selection'] = 'Mary';

console.log(person.name);

