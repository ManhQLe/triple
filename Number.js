const epsilon = 1e-8
module.exports={
    isSame(a, b) {
    return Math.abs(a-b) <=epsilon
    },
    GCF(numbers){
        let gcf = numbers[0];
        let i = 1;
        while(i<numbers.length){
            let b = numbers[i++],a = gcf,x
            do{
                x = a - b;
                x>0?a=x:(x=-x,b=x);
                x?gcf=x:1
            }while(x)        
        }
        return gcf
    }
}
