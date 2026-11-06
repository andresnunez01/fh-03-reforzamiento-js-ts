

const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [,, trunks] = characterNames;


console.log(trunks)

const returnsArrauFn = ()=> {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrauFn();

console.log(letters, numbers)

const useState = (value:string) => {
    return [value, (newValue:string) => {console.log(newValue)}] as const;
}

const [value, setValue] = useState('Goku');

console.log(value)
setValue('Vegeta')

