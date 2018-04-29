const assert = require("assert");
const Triple = require("../src")

const t1 = new Triple(4,3,5);
const t2 = new Triple(3,4,5)

const t3 = t2.sub(t1)
const expect = new Triple(24,7,25)

console.log(t3)

assert.equal(t3.equals(expect),true);