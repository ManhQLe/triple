const assert = require("assert");
const Triple = require("../src")

const T90 = Triple.COMMON.T90
const T180 = Triple.COMMON.T180

assert(T90.equals(new Triple(0,1,1)));

assert(T180.equals(new Triple(-1,0,1)));