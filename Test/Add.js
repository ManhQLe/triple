const assert = require("assert");
const Triple = require("../src/Triple")

const t1 = new Triple(4,3,5);
const t2 = new Triple(24,7,25)

const t3 = t1.add(t2)
const expect = new Triple(75,100,125)

console.log(t3)

assert.equal(t3.equals(expect),true);