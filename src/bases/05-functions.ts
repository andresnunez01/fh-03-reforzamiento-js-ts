function greet(name:string):string {
    return `Hola ${name}`;
}


const greet2 = (name: string): string =>  `Hola ${name}`;


const message = greet('Andres');
const message2 = greet2('Veggeta');

console.log(message, message2);

interface User {
    uid: string;
    username: string;
}


function getUser():User {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

const getUser2 = (): User => ({
    uid: 'ABC1234',
    username: 'El_Papi15024'
})

console.log(getUser, getUser2)


const myNumbers: number[] = [1, 2, 3, 4, 5];


myNumbers.forEach((number) => console.log(number * 2));