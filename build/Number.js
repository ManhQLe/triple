const epsilon = 1e-8
const radPerAngle = Math.PI / 180
const anglePerRad = 180 / Math.PI
module.exports = {
    isSame(a, b) {
        return Math.abs(a - b) <= epsilon
    },
    isSameArray(a,b){
        return a.every((e,i)=>{
            return Math.abs(e-b[i]) <=epsilon
        })
    },
    GCF(numbers) {
        let gcf = numbers[0];
        let i = 1;
        while (i < numbers.length) {
            let b = numbers[i++],
                a = gcf,
                x
            do {
                x = a - b;
                x > 0 ? a = x : (x = -x, b = x);
                x ? gcf = x : 1
            } while (x)
        }
        return gcf
    },
    toRad(a) {
        return a * radPerAngle
    },

    toAngle(r) {
        return r * anglePerRad;
    }
}