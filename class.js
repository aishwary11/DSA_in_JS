class MyArray {
  constructor () {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  shift() {
    const firstItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
  deleteByIndex(index) {
    const deletedItem = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deletedItem;
  }
}
const newArray = new MyArray();
newArray.push("Apple");
newArray.push("Orange");
newArray.push("Mango");
console.log(newArray.get(1));
console.log(newArray.get(2));
// console.log(newArray.pop());
// console.log(newArray.shift());
console.log(newArray.deleteByIndex(1));
console.log(newArray);