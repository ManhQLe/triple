const assert = require("assert");
const Triple = require("../src");
const Number = require("../src/Number")

const t1 = new Triple(4,3,5);
const t2 = t1.add(t1);

const t3 = t1.double();

assert(t3.equals(t2))

let t4 = t1.add(t1);
t4 = t4.add(t4);

let t5 = t1.double(2);

assert(t4.equals(t5));

/*************************************/

const t6 = Triple.fromAngle(30);
const t7  = t6.double()
const t8 = t6.double(2);

assert(Number.isSame(t7.angle(),60));
assert(Number.isSame(t8.angle(),120));

/************************************ */

const t9 = t6.half();
const t10 = t6.half(2);

assert(Number.isSame(t9.angle(),15));
assert(Number.isSame(t10.angle(),7.5));

console.log("Test passed");

