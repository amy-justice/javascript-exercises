const fibonacci = function(number) {
    if (number < 0) {
        return 'OOPS'
    } else if (typeof number == 'string') {
        int = parseInt(number);
        fibo = 1;
        lastStep = 0;
        for (i = 0; i < int; i++) {
            oldFibo = fibo;
            fibo = fibo + lastStep;
            if (i > 0) {
                lastStep = oldFibo
            }
        }
        return fibo;
    } else {
        fibo = 1;
        lastStep = 0;
        for (i = 0; i < number; i++) {
            oldFibo = fibo;
            fibo = fibo + lastStep;
            if (i > 0) {
                lastStep = oldFibo
            }
        }
        return fibo;
    }
};

// Do not edit below this line
module.exports = fibonacci;

