const numberDevice = require('./Number')

class Triple {
    constructor(b = 0, h = 1) {

        this.x = b;
        this.y = h;
        
        Object.defineProperty(this,"d",{            
            get(){return Math.sqrt(this.x*this.x + this.y*this.y)}            
        })

    }

    selfAdd(times){
        let x = Triple.fromRad(0);
        for(let i = 0;i<times;i++)
            x = x.add(this)
        return x;
    }

    unit() {
        return new Triple(this.cos(), this.sin(), 1);
    }

    tan() {
        return this.y / this.x
    }

    sin() {
        return this.y / this.d
    }

    cos() {
        return this.x / this.d
    }

    cosec() {
        return this.d / this.y
    }

    sec() {
        return this.d / this.x
    }

    cotan() {
        return this.x / this.y
    }

    angle() {
        return Math.atan2(this.y, this.x);
    }

    add(x) {
        return new Triple(
            this.x * x.x - this.y * x.y,
            this.y * x.x + this.x * x.y,
            this.d * x.d
        )
    }

    sub(x) {
        return new Triple(
            this.x * x.x + this.y * x.y,
            this.y * x.x - this.x * x.y,
            this.d * x.d
        )
    }

    double(n = 1) {
        let {x,y} = this;
        let x1, y1;
        do {
            x1 = x * x - y * y;
            y1 = 2 * x * y;
            x = x1;
            y = y1;
        } while (--n > 0);
        return new Triple(x, y);
    }

    half(n=1){
        let {x,y} = this;        
        let x1, r;
        do {
            r = Math.sqrt(x*x+y*y);
            x1 = x + r;            
            x = x1;            
        } while (--n > 0);
        return new Triple(x, y);
    }

    equals(x) {
        return numberDevice.isSame(x.x, this.x) &&
            numberDevice.isSame(x.y, this.y)
    }

    toString() {
        return `${this.x} ${this.y} ${this.d}`
    }

    rotateRad(rad = 0) {
        return this.add(Triple.fromRad(rad));
    }

    rotate(ang = 0) {
        return this.rotateRad(numberDevice.toRad(ang))
    }


    radAngle() {
        return Math.atan2(this.y, this.x);
    }

    angle() {
        return numberDevice.toAngle(Math.atan2(this.y, this.x))
    }

    static fromRad(rad) {
        return new Triple(Math.cos(rad), Math.sin(rad))
    }

    static fromAngle(ang) {
        return Triple.fromRad(numberDevice.toRad(ang))
    }

    static fromSineOf(rad) {
        let sin = Math.sin(rad)
        return new Triple(Math.sqrt(1 - sin * sin), sin, 1)
    }
    static fromCosineOf(rad) {
        let cos = Math.cos(rad)
        return new Triple(cos, Math.sqrt(1 - cos * cos), 1)
    }
}

Triple.FUNC = {
    getTripleFromPoint:(x,y)=>{
        return new Triple(x,y,Math.sqrt(x*x+y*y));
    },
    rotate:function(p,ang,pivot=[0,0]){
        return this.rotateRad(p,numberDevice.toRad(ang),pivot);
    },
    rotateRad: (p,rad,pivot=[0,0])=>{        
        let t = Triple.fromRad(rad)
        let temp = [p[0]-pivot[0],p[1]-pivot[1]]
        return [
            t.x*temp[0] - t.y*temp[1] + pivot[0],
            t.y*temp[0] + t.x*temp[1] + pivot[1]
        ]
    },
    reflect:function(point, vec){
        const t =  this.getTripleFromPoint(vec[0],vec[1]).unit().selfAdd(2)        
        return [
            t.x *point[0] + t.y*point[1],
            t.y *point[0] - t.x *point[1]
        ]
    }
}


Triple.COMMON = new Proxy(Triple, {
    get: function (obj, key) {
        switch (key) {
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