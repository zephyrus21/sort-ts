import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbers = new NumbersCollection([1, 5, 523, 2, -3]);
const characters = new CharactersCollection('bca');
const sorter1 = new Sorter(numbers);
const sorter2 = new Sorter(characters);

sorter1.sort();
sorter2.sort();

console.log(numbers.data);
console.log(characters.data);
