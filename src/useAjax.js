import { useEffect, useState } from 'react';
import axios from 'axios';
// 响应拦截器  处理响应回来的数据 把数据进行简化处理
//{data:{carlist:[]}}=>{carlist:[]}
axios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
		Promise.reject(err)
	}
);
export default function useAjax(url,method='get',params={}) {
  let [data, setdata] = useState(null);
  useEffect(() => {
    async function fetchData() {
      data = await axios({
        method,
        url,
        data:params
      });
      setdata(data);
    }
    fetchData();
  }, [url]);
  return data;
}
