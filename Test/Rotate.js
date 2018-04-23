const assert = require("assert");
const Triple = require("../src/Triple")


const t1 = new Triple(1,1,Math.sqrt(2));

assert(t1.angle()==45)

const t2 = t1.rotate(90)


assert(t2.angle()==135)