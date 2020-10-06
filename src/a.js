let obj1 = {}
let obj2 = obj1;
obj2.n = 100
console.log(Object.is(obj1,obj2))