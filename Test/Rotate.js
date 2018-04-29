const assert = require("assert");
const Triple = require("../src/index")


const t1 = new Triple(1,1,Math.sqrt(2));

assert(t1.angle()==45)

const t2 = t1.rotate(90)


assert(t2.angle()==135)

const p1 = [-2,5]
const pivot= [1,7]

const p2 = Triple.FUNC.rotate(p1,-90,pivot);

assert(p2[0] == -1 && p2[1] == 10)


const p3 = [3,0]
const p4 = Triple.FUNC.rotate(p3,45);

console.log(p4)

console.log("Test passed")