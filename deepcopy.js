var obj = {
    a : { b : { c: { d : { e : 5} } } }
};

function deepCopy(obj)
{
    if (typeof obj != 'object') {
        console.trace();
        return obj;
    }
    var newObj = {};
    for (var attr in obj) {
        newObj[attr] = deepCopy(obj[attr]);
    }
    return newObj;
}

var obj2 = deepCopy(obj);
obj2.a.b.c.d.e = 10;
alert(obj.a.b.c.d.e);