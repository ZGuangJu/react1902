import React, { useEffect, useState } from 'react';
import axios from 'axios';
//'https://hn.algolia.com/api/v1/search?query=redux'
//hooks 实现异步请求
export default function Hooksapi() {
  //初始化数据
  const [data, setD] = useState({ hits: [] });
  //初始化 url
  const [url, setU] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  );
  //初始化查询参数
  const [query, setQ] = useState('redux');
  useEffect(() => {
    // async 表示函数里面有异步操作和await 一起使用  返回值是个promise
    const fetchD = async () => {
      const data =await axios.get(url);
      //设置数据
      setD(data.data);
    };
    fetchD();
  }, [url]);
  return (
    <div>
      {/* input放的是查询参数的值 */}
      <input
        value={query}
        onChange={(e) => {
          setQ(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setU(`https://hn.algolia.com/api/v1/search?query=${query}`);
        }}
      >
        点击重新请求
      </button>
      {data.hits && data.hits.length ? (
        data.hits.map((item, index) => {
          return <li key={index}> {item.author}</li>;
        })
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
