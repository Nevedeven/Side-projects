/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
//function takes a 32 bit integer, rearranges the bits in reverse order, and returns the resulting int.
var reverseBits = function(n) {
    var reversed=0;
    var x = n;
    for(var i = 31; i>=0; i--)
    {
        if(x>=Math.pow(2,i))
        {
            x -= Math.pow(2,i);
            reversed += Math.pow(2,31-i);
        } 
    }
    return reversed;
};
