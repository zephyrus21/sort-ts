import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbers = new NumbersCollection([1, 5, 523, 2, -3]);
const characters = new CharactersCollection('bca');
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(0);
linkedList.add(21);

linkedList.print();
console.log(numbers.data);
console.log(characters.data);

const sorter1 = new Sorter(numbers);
const sorter2 = new Sorter(characters);
const sorter3 = new Sorter(linkedList);

sorter1.sort();
sorter2.sort();
sorter3.sort();

linkedList.print();
console.log(numbers.data);
console.log(characters.data);
