const assert = require("assert");
const device =require("../src/Number")
const Triple = require("../src/index")

const p1 = [5,5]
const mirror = [1,2]

const p2 = Triple.FUNC.reflect(p1,mirror);

assert(device.isSameArray(p2,[1,7]))

const p3 = [4,7]
const ymirror = [0,1]
const p4 = Triple.FUNC.reflect(p3,ymirror);
console.log(p4)

assert(device.isSameArray(p4,[-4,7]))