//returns the number of 1 bits in a 32 bit number.

var hammingWeight = function(n) {
    
    var x = n;
    var bits = 0;
    for(var i = 32; i>=0; i--)
    {
        if(x>=Math.pow(2,i))
        {
            x -= Math.pow(2,i);
            bits++;
        }
    }
     return bits;
};
