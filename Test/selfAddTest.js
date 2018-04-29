const assert = require("assert");
const Triple = require("../src")

const x = new Triple(12,5,13);
const y = x.add(x)
const y2 = x.selfAdd(2);
console.log(y)
console.log(y2)

assert(y.equals(y2))
assert(x.selfAdd(2).equals(new Triple(119,120,169)));

