import { heroes, type Hero, type Owner} from '../data/heroes.data';

const getHeroById = (id: number): Hero => {
    const hero = heroes.find( (hero) => hero.id === id );

    if (!hero) throw new Error(`No existe un heroe con el id ${id}`)

        return hero;
}

// console.log(getHeroById(2));

export const getHeroesByOwner = ( owner: Owner ) :Hero[] => {
    const heroesByOwner = heroes.filter( (hero) => hero.owner === owner );

    if (heroesByOwner.length === 0) throw new Error(`No existen heroes con el owner ${owner}`)

    return heroesByOwner;
}