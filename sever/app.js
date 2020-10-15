let express = require('express')
let cors = require('cors')
let app = express()
app.use(cors())

app.get('/list',(req,res)=>{
  res.json({
		carlist:[
			{name:'苹果',price:18},
			{name:'li',price:33},
			{name:'xiangjiao',price:22}
		]
	})
})
app.get('/banner',(req,res)=>{
  res.json({
		list:[
			'https://img11.360buyimg.com/pop/s590x470_jfs/t1/111313/24/18914/94862/5f70357dE7f2c1a00/f4646655dc4df44f.jpg.webp',
			'https://img11.360buyimg.com/pop/s590x470_jfs/t1/111313/24/18914/94862/5f70357dE7f2c1a00/f4646655dc4df44f.jpg.webp'
			
		
		]
	})
})
app.listen(8081,()=>{
	 console.log(`8081已经启动`)
})