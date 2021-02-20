import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([1, 5, 523, 2, -3]);
const sorter = new Sorter(numbers);

sorter.sort();

console.log(numbers.data);
