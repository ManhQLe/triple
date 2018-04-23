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

    unit(){
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

    equals(x){
        return Number.isSame(x.b,this.b)
        && Number.isSame(x.h,this.h)
        && Number.isSame(x.d,this.d)
    }

    toString(){
        return `${this.b} ${this.h} ${this.d}`
    }

    static fromRad(rad){
        return new  Triple(Math.cos(rad),Math.sin(rad))
    }

    static fromAngle(ang){
        return Triple.fromRad(Math.PI*ang/180)
    }    
}



Triple.COMMON = new Proxy(Triple,{
    get:function(obj,key){
        switch(key){
            case "T90":
                return obj.fromAngle(90);
            case "TN90":
                return obj.fromAngle(-90);
            case "T180":
                return obj.fromAngle(180);
            case "TN180":
                return obj.fromAngle(-180);
            case "T60":
                return obj.fromAngle(60);
            case "T30":
                return obj.fromAngle(30);                
            case "T45":
                return obj.fromAngle(45);            
        }
    }
})

module.exports = Triple