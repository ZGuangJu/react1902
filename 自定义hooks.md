# 自定义hooks的例子 
- 定义 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook。
- 特点 只共用逻辑 不共用数据  
1. 自定义标题  

```js
function useTitle(title){
  useEffect(() => {
     document.title=title
  }, [title])
}
//使用
useTitle(我是自定义的标题)
```

2. 使用ajax请求 

```js
function useAjax(url){
  let [data,setdata] = useState([])
  useEffect(()=>{
  let Fetchdata = async ()=>{
    axios.get(url).then(res=>{
     setdata(res.data)
    })
  }
  Fetchdata()
  },[url])
  return data
}
```
3. 需要获取鼠标当前的位置坐标
```js
import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0 })
    useEffect(() => {
        const updateMouse = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('mousemove', updateMouse)
        return () => {
            document.removeEventListener('mousemove', updateMouse)
        }
    })
    return position
}

export default useMousePosition


import React from 'react'
import useMousePosition from './useMousePosition'

function App() {
    const position = useMousePosition()
    return (
        <div>
            <div>x: {position.x}</div>
            <div>y: {position.y}</div>
        </div>
    )
}
```
