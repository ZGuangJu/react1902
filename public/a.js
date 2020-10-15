let p = new Promise((reslove,reject)=>{
   reslove()
})
setTimeout(()=>{
	console.log(2)
	 p.then(()=>{
		 console.log(3)
	 })
	 setTimeout(()=>{
		 console.log(5)
	 })
})
setTimeout(()=>{
	console.log(4)
	p.then(()=>{
		console.log(6)
	})
})

p.then(()=>{
	console.log(1)
})
