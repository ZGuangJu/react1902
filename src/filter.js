//filter 过滤  返回一个符合条件的新数组  不改变原数组
let arr = [1, 2, 3, 4];
let arr2 = arr.filter((item, index) => {
  return item > 2; //回调函数的返回值是true 或者false 
});
//cb 应该是一个函数
Array.prototype.myfilter = function (cb) {
  let newArr = []; //定义一个新数组  用来接收返回值为真的项
  //this 就是当前调用的数组  arr
  //需要拿出arr的每一项出来 那我们就需要遍历数组
  for (let i = 0; i < this.length; i++) {
		//item 应该是数组的每一项 
    if (cb(this[i], i)) { //返回true 就放进新数组 
			newArr.push(this[i])
    }
  }
	return newArr
};
let  result = arr.myfilter((item, index) => {
	 return item>2
});
result
