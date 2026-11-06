interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
    country: string;
}

const ironman: Person = {
    firstName: 'Andres',
    lastName: 'Nunez',
    age: 25,
    address: {
        postalCode: "ABC123",
        city: "New York",
        country: "USA"
    }
}

const spiderman : Person = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.address.city = 'Los Angeles';

console.log(ironman, spiderman);