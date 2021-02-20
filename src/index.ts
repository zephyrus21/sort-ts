import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([1, 5, 523, 2, -3]);
const characters = new CharactersCollection('bca');
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(0);
linkedList.add(21);

console.log(numbers.data);
console.log(characters.data);
linkedList.print();

linkedList.sort();
numbers.sort();
characters.sort();

linkedList.print();
console.log(numbers.data);
console.log(characters.data);
