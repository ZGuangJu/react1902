import React,{useEffect} from 'react'
import axios from 'axios'
import useTitle from  './useTilte'
import useCount from  './useCount'

let  carurl = 'http://192.168.32.35:8081/list'
let bannerurl = 'http://192.168.32.35:8081/banner'
export default function Lili() {
	useTitle('lili')
	const [conut,setC] = useCount()
	useEffect(()=>{
		let fetchd = async()=>{
      let data  =   await axios.get(carurl) 
      let bannerlist  =   await axios.get(bannerurl) 
		}
		fetchd()
	},[])
	return (
		<div>
			这是丽丽家 需要登录才能访问
				{conut}
				<button onClick={setC
				}>点击加1</button>
				<Child></Child>
		</div>
	)
}

function Child(){
	let [count] =useCount()
  return (<>
	     {count}
	</>)
}