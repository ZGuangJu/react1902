import React from 'react';
import {useHistory} from 'react-router-dom'

export default function Home() {
  let history = useHistory();
  return <div>
    这是home页面
    <button onClick={()=>history.push('/about')}>hooks点击跳转</button>
    </div>;
}
