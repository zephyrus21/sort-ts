class Sorter {
  collection: number[] | string;

  constructor(collection: number[] | string) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //! this will works if the collection is array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
        //! this will work if the collection is string
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}

const sorter = new Sorter([12, 4, 2, 8, 54]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
