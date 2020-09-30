// every 的使用 返回值是true或者false 
let arr = [0,1,2]
//只要有一项不成立则返回false 否则返回true 
let r = arr.every(item=>{
	return item==0 
}) 
r 
//some 只要有有一项成立就返回true 
let r1 = arr.some(item=>{
	return item==0
}) 
r1

