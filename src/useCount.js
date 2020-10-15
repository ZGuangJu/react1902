import {useState} from 'react'

export default function useCount() {
	let  [count,setCount] = useState(0)
	function add(){
		 setCount(count=>count+1)
	}
	return [count,add]
  
}
