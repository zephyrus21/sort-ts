"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbers = new NumbersCollection_1.NumbersCollection([1, 5, 523, 2, -3]);
var sorter = new Sorter_1.Sorter(numbers);
sorter.sort();
console.log(numbers.data);
