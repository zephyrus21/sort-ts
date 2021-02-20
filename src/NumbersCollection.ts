export class NumbersCollection {
  constructor(public data: number[]) {}

  //! getter to return the length
  get length(): number {
    return this.data.length;
  }

  //! function to compare the values
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  //! function to swap
  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}
