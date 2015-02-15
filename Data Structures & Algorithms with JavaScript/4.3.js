// 4.3.1
//针对基数为2~9,利用栈将一个数字从一种数制转换成另一种数制。

function getNum( num, base )
{
    if( !isNumber( num ) || !isNumber( base ) || base < 2 || base > 9 ) {
        return null;
    }
    if ( num < base ) {
        return num;
    }
    var result = [];
    while ( Math.floor( num / base ) != 0 ) {
        result.push( num % base );
        num = Math.floor( num / base );
        if ( num < base ) {
            result.push( num );
            num = 0;
        }
    }
    return result.reverse().join("");
}

function isNumber( no )
{
    return !isNaN( parseFloat(no) ) && isFinite( no );
}