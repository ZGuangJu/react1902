//map 映射 根据条件映射出一个新的数组 
let arr = [1,2,3,4]
Array.prototype.myMap= function(cb){
	 let N = []
	 for(let i =0;i<this.length;i++){
      N.push(cb(this[i],i))
	 }
	 return N
}
let arr1 = arr.myMap(item=>{
	return item*2
})
arr1

