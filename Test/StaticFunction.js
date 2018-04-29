const assert = require("assert");
const Triple = require("../src")

const t1 = Triple.fromAngle(45)

const t2 = new Triple(Math.SQRT1_2,Math.SQRT1_2);

assert(t2.equals(t1),"Not equal");
