const Number = require('./Number')

class Triple
{
    constructor(b=0,h=1,d=1){
        if(!Number.isSame(b*b + h*h,d*d))
            throw "Invalid triple"
        this.b = b;
        this.h = h;
        this.d = d;

    }

    general(){
        return new Triple(this.cos(),this.sin(),1);
    }

    tan(){
        return this.h/this.b
    }

    sin(){
        return this.h/this.d
    }

    cos(){
        return this.b/this.d
    }

    cosec(){
        return this.d/this.h
    }

    sec(){
        return this.d/this.b
    }

    cotan(){
        return this.b/this.h
    }

    angle(){
        return Math.atan2(this.h,this.b);
    }

    add(x){
        return new Triple(
            this.b*x.b - this.h*x.h,
            this.h*x.b + this.b* x.h,
            this.d * x.d
        )
    }

    sub(x){
        return new Triple(
            this.b*x.b + this.h*x.h,
            this.h*x.b - this.b* x.h,
            this.d * x.d
        )
    }
}