# react 
1. 创建项目 
npx create-react-app 项目名  
2. 启动项目
cd 项目名  npm start/yarn start 
3. 项目目录
 nodemoules  依赖的包 
 public 静态资源 
 src  主要文件
 gitignore git忽略文件
 package.json  依赖包的版本 脚本运行  可通过npm i 把包下回来   
4. 入口文件是src/index.js  
   src下只保留index.js
5. window.root 拿到是index.html里面的divid为root元素  
window.root = document.getElementById('root')
document.createTextNode 创建文本节点 
6. 同级元素不想用标签包裹的时候 可以用 <></> 去包裹 
  和 <React.Fragment> 的使用完全相等 
  但是空标签不能给任何属性 React.Fragment可以给key并且也只能给key  
	---
// react 主要负责逻辑层 
// reactdom 主要负责渲染  
- jsx js +xml(html)  的特点
 1. 只能有一个根元素
 2. jsx的特性  <> 表示html标签 {} 表示js 
 3. class className js里面class是关键字  
 4. label 的for 属性改成htmlFor  for是关键字  
 5. style => 对象形式{fontSize:"16px",color:"red"}  双括号 第一个括号表示这是一个js表达式 第二个括号表示这是一个对象 
 6. innerhtml  dangerouslySetInnerHTML  =  vue  v-html 
 7. jsx 语法注释的写法  
 ```js
 	 { 
		// 这是单行注释 
	 }
	 { /** 这个是多行注释 */}
```
8. 事件 事件名 on后面跟事件的驼峰命名 
9. { } 必须有返回值 
10. 布尔类型、Null 以及 Undefined 渲染时将会忽略(但是是合法的)
## 编程单词 
 Invalid  无效的    property 属性  dangerously 危险的 
## state变量渲染和setState修改数据

在组件⾥⾯我们通过{}在JSX⾥⾯渲染变量

5 如果数据需要修改，并且需要⻚页⾯同时响应改变，那就需要把变量 放在state⾥⾯，同时使⽤setState修改 初始化状态state

// 初始化状态

this.state = { count: 0 };

更新状态使⽤setState,不能直接this.state.count=xxx

// 更新状态

this.setState({ count: this.state.count + 1 });

注意事项

setState是异步的，底层设计同⼀个⽣命周期会批量操作更新 state setState第⼆个参数是⼀个可选参数，传⼊⼀个回调函数可以 获取到最新的state 当修改的state依赖上⼀次修改的state的值时，可使⽤以下这 种⽅法修改

6 this.setState((prevState, prevProps)=>({

//prevState：上⼀次修改的状态state //prevProps：上⼀次修改的属性props count: prevState.count + 1

}), () => {

//这⾥可以获取到最新的state console.log(this.state.count);

});
强制更新状态(如果没有特殊情况，不建议使用)
```js
 this.state.number +=1
    this.forceUpdate() //不管数据有没有改变 都进行强制更新  
    console.log(this.state)
```
## props属性传递(可以传递任何值（方法或者属性）)

⽗组件向⼦组件传递属性利⽤props接收 使⽤例⼦如下：
```js
//⽗组件传⼊

<PropsDemo title="Tim⽼师教react"></PropsDemo>

//⼦组件使⽤ //class组件使⽤ <h1>{this.props.title}</h1> //函数型组件使⽤ function xxx(props){

return <h1>{props.title}</h1> } //解构赋值写法 function xxx({title}){

return <h1>{title}</h1> }
```

## 条件渲染与数据循环

条件渲染写法，⼀般使⽤三⽬表达式
```js
//三⽬表达式写法 
{this.state.showTitle?<h1>{this.props.title} </h1>:null} 
//优化上⾯三⽬表达式写法，先在render函数⾥定义⼀个变量装载 结果 
let result=this.state.showTitle?<h1> {this.props.title}</h1>:null {result} 
//直接使⽤if else写 
let result if(this.state.showTitle){
result=( <h1>this.props.title</h1> ) }else{ result=null }

//数据循环渲染写法

class App extends React.Component{
constructor(props){ 
  super(props) 
  this.state = { goods: [ { title: 'html+css基础⼊⻔门', price: 19.8}, { title: 'js零基础阶级', price: 29.8}, { title: 'vue基础⼊⻔门', price: 19.8}, { title: 'vue电商单⻚页⾯项⽬实战', price:39.8},{ title: 'react零基础进阶单⻚页⾯项⽬实战', price: 59.8}, ] } } 
 render(){ 
   return <div> 
         <ul> {this.state.goods.map(good=>{
        return <li key={good.title}><span>{good.title} </span> <span>{good.price}元 </span> </li>})}
        </ul> 
      </div>
  }
}
```
##  ref 的基本使用
 类组件使用ref  Creatref 函数组件可以使用useRef
  构造函数 construcotor 代码
```js
  //construcotor
 this.refA = React.creatRef()
 // 组件里面使用 ref ='定义的ref'
  <input  ref ={this.refA} />
 // 取值和赋值  属性会放在current上面 
  this.refA.current 
```
## class组件（类）组件的生命周期 
#### 挂载（当组件实例被创建并插入DOM中）的时候 生命周期的调用顺序
1. 构造函数  constructor()  初始化状态
`
 static getDerivedStateFromProps(nextprops,prevstate)
 根据新的属性(props)生成新的状态(state) 
 参数是新的属性props和老的状态，此生命周期不常用 
`
2. render()  把虚拟dom变成真实dom并插入到dom元素中
3. componentDidMount() dom挂载完成     
- 组件的渲染顺序  父组件先渲染(父组件render之后)  子组件开始渲染  子组件挂载完成之后(componentDidMount)父组件最后挂载完成(componentDidMount) 

####  组件更新 组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
1. static getDerivedStateFromProps()
2. shouldComponentUpdate() 
- 如果 shouldComponentUpdate返回的是false 则不在继续
3. render()  
4. getSnapshotBeforeUpdate() 获取dom更新前的快照 
5. componentDidUpdate()  会在更新后会被立即调用。首次渲染不会执行此方法。
#### 卸载 当组件从 DOM 中移除时会调用如下方法：
componentWillUnmount()
#### 生命周期流程(有更新)
construtor -> getDerivedStateFromProps（静态方法）-> 询问是否需要更新->shouldComponentUpdate不需要(中断) 
5. componentDidUpdate()  会在更新后会被立即调用。首次渲染不会执行此方法。
construtor -> getDerivedStateFromProps（静态方法）-> 询问是否需要更新->shouldComponentUpdate需要-> render(渲染)->getSnapshotBeforeUpdate(获取到更新的dom) -> componentDidUpdate
## Render 阶段（Render及之前的生命周期）纯净且不包含副作用。可能会被 React 暂停，中止或重新启动
construtor render 初始化状态和接收props参数
## “Pre-commit 阶段”
可以读取 DOM。 getSnapshotBeforeUpdate 
## “commit 阶段” 可以使用 DOM，运行副作用，安排更新。(重点)
componentDidMount  componentDidUpdate 
componentWillUnmount
## 上下文传值
1. 创建上下文对象  createContext
2. 祖先级组件使用Provider组件的value进行值传递
3. 接收数据的组件 通过定义 static contextType = 定义的上下文对象 传递的属性会挂载到this.context上面
```js
import React, { Component,createContext } from 'react'
 import {render} from 'react-dom'
//创建上下文对象
let ThemeContext = createContext()
 class App extends Component {
	 constructor(){
		 super()
		 this.state= {
			 money:100  
		 }
	}
	render() {
		return (
			 <ThemeContext.Provider value={{money:this.state.money}}>
			  <div>
				 上下文传递
				  <Child></Child>
		    </div>
			</ThemeContext.Provider>
		)
	}
}
class Child extends Component {
	render() {
		return (
			<div>
				 我是子组件
				 <Grondson></Grondson>
			</div>
		)
	}
}
class Grondson extends Component {
  static contextType = ThemeContext
	render() {
		console.log(this.context)
		return (
			< >
				 我是孙子组件 爷爷给的钱是 {this.context.money}
			</>
		)
	}
}
```
## PropTypes 类型验证 

domdiff  
##  函数组件hooks  react 16.8版本之前 
## 重要的useState useEffect  uselayoutEffect    
只在顶层调⽤Hooks
1. Hooks的调⽤尽量只在顶层作⽤域进⾏调⽤ 不要在循环，条件或者是嵌套函数中调⽤Hook，否则可能会⽆ 法确保每次组件渲染时都以相同的顺序调⽤Hook 
2. 只在函数组件调⽤Hooks

React Hooks⽬前只⽀持函数组件，所以⼤家别在class组件或 者普通的函数⾥⾯调⽤Hook钩⼦函数 React Hooks的应⽤场景如下

1. 函数组件 
2. ⾃定义hooks 

函数组件 ⾃定义hooks 在未来的版本React Hooks会扩展到class组件，但是现阶段不能 再class⾥使⽤

1. useState---组件状态管理钩⼦
   useState能使函数组件能够使⽤state 基本使⽤如下所示

 ```js
 const [state,setState]=useState(initState)
 ```

- state是要设置的状态  
- setState是更新state的⽅法，只是⼀个⽅法名，可以随意更改 
- initState是初始的state，可以是随意的数据类型，也可以是回调函数，但是函数必须是有返回值

 ```js
 const [state,setState]=useState(()=>{return {name:"lili"}})
 ```

2. useEffect---副作⽤处理钩⼦

- useEffect
 数据获取、订阅、定时执⾏任务、⼿动修改ReactDOM这些⾏
 为都可以称为副作⽤。⽽useEffect就是为了处理这些副作⽤⽽
 ⽣的
 useEffect也是componentDidMount、
 componentDidUpdate和componentWillUnmount这⼏个
 ⽣命周期⽅法的统⼀

- useEffect基本使用：

```js
 useEffect(callback,array)

 useEffect(() =>{
  xxxxxx
 //副作⽤逻辑
 return ()=>{ //componentWillUnmount
 //清理副作⽤需要清理的内容
 //组件渲染和组件 卸载前执⾏的代码
 }
 },[])
```

- array(可选参数)：数组，⽤于控制useEffect的执⾏
分三种情况
 1. 空数组，则只会执⾏⼀次（即初次渲染render）
 2. ⾮空数组，useEffect会在数组发⽣改变后执⾏
 3. 不填array这个数组，useEffect每次渲染都会执⾏

- 使用例子  

```js
import {useState,useEffect} from 'react'
const App=() => {
 const [count,setState]=useState(0)
 useEffect(() =>{
 //更新⻚页⾯标题
 document.title=`您点击了${count}次了哦`
 },[count])
 return (
 <div>
 <div>你点击了{count}次</div>
 <button onClick={()=>setState(count+1)}>点 击</button>
 </div>
 )
}
//定时器例子 清除副作用函数的用法
function App(){
	 let [count,setcount] = useState(0)
	 useEffect(() => {
	  let	timer =  setInterval(() => {
			  console.log(timer)
			  setcount(count=>count+1)
		 }, 1000);
		 return ()=>{
			 clearInterval(timer)
		 }
	})
  return <div>
		  useEffect {count}
	 </div>
 }
```
3. useContext 使用上下文 
```js
 let value  = usecontext(上下文对象)
 // 相当于类组件的 static contextType = 上下问对象 
```
4. useReducer useState的替代方案 
``` js
// 基本用法
const [state, dispatch] = useReducer(reducer, initialArg, init);
// 数组里面  state 状态  dispatch 派发
// reducer  是一个函数 接受派发过来的动作并返回新的state initialArg 是一个初始化的状态 如果传递了第三个参数会讲init 这样初始 state 将被设置为 init(initialArg)。
// 为啥用init?
//这么做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利：
 ()=>dispatch({type:'add',payload:5}) 
 //type 是动作类型（相当于我们写函数的函数名）
 function reducer(state,action){}
//reducer相当于管理员 用来进行状态管理 
//参数 state action ->dispacth里传过来的对象 可以根据type属性判断传递过来的动作是什么  如果传递参数使用payload进行传递 
```
5. useMemo和useCallback  memo 备忘 使用备忘录 
```js
//基本用法
useMemo(callback,[deps])
// 第一参数是回调函数 用来返回定义的状态
// 第二个参数是一个数组 表示依赖项  用法和useEffect的依赖项完全相同 
useCallback(callback,[deps])
//相当于 useMemo(()=>fn,[deps])
// 第一参数是回调函数 放置子组件依赖的函数 减少更新
// 第二个参数是一个数组 表示依赖项  用法和useEffect的依赖项完全相同 
```
6. useRef 返回的是一个不可变的对象 
```js
 let input =useRef() // 通过 .current属性能拿到当前dom或者组件 用法同React.creatRef 
```
7. useImperativeHandle 使用命令式代码 
```js
// 第一个参数是传进来的ref Pref 
// 第二个参数是回调函数   
useImperativeHandle(Pref,()=>{
  return {
    // 使用自己定义的ref 
  } //暴露给父组件的实例值 
})
// useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码。useImperativeHandle 应当与 forwardRef 一起使用
```
8. useLayoutEffect（布局副作用）
useEffect在浏览器渲染完成后执行
useLayoutEffect在浏览器渲染前执行
特点：
useLayoutEffect总是比useEffect先执行
useLayoutEffect里面的任务最好影响了Layout（布局）
一般建议使用useEffect 

## React 优化 （浅比较）
// 减少不必要的渲染 
1. 类组件  可以使用 PureComponent 
```js
 class Child2 extends PureComponent{}
```
2. 函数组件 类组件 React.memo(组件) React.memo是一个高阶组件
```js
  let Memochild = React.memo(Child)
```
3. 函数组件 如果子组件依赖父组件的数据可以使用 useMemo  
```js
 let data =useMemo(()=>{
     return {count}
	 },[count])
```
4. 函数组件 如果子组件依赖父组件的事件可以使用 useCallback
```js
  const add = useCallback(() => {
    setconut((count) => count + 1);
  }, []);
```



## 使用hooks实现异步请求  

```js
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
function App1() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
export default App1;
```
## react 路由
1 下载  `npm install react-router-dom`

// 1 用类组件写条件渲染 和 循环渲染 
// 2 使用useState 实现 本地时间每秒自动计时    


//1.写一个 购物车列表 数据自定义 写出购物车商品价格综合 (后面实现单选去 全选)  
[{name:'苹果',number:3,price:3.8 },{name:'橘子',number:6,price:8 }]
3*3.8 + 6*8 
// 用函数组件实现购物车 实现加1 减1功能  实现编辑功能 点击编辑的时候会出现删除按钮 点击删除可以删除选中的商品   

## React 路由  
 1. 下载安装 npm i react-router-dom /yarn add  react-router-dom
 2. 路由的基本使用 
 ```js
 import React from "react";
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

           {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
 ```
## Router组件 包裹路由的容器 放在路由最外层 
## Route  是表示路由组件(每一个路由) 
1. path 表示路由的路径 /home =>Home组件  
2. component 表示该路由对应的是什么组件 
3. 路由上的属性会通过props传递给组件 
4. 路由的模式 
 - HashRouter  hash模式的路由 带#   
 - BrowserRouter  history模式的路由   
5. Route 的属性  
  - exact 精确匹配(默认是true）
  - strict 严格匹配  /about/  就必须这样访问 /about/
  -  sensitive 严格大小写匹配  
 6. 路由的路径参数 pathname=路径名/:值   /user/2  /user/1   
 - 路径参数会传到组件的props里面  路由所有的 props (match, location and history) 会传递到组件里  
- props.history 放的是路由跳转的方法 go() push->跳转到那个路由  goBack->后退 goForward->前进 
 
// 比如   根据多个用户的id访问用户详情 /user/:id :id 不固定但是必须传 
7. render  替代react组件渲染  
```js
<Route path='/profile' render= {()=>(<div><RendeR/>这是render演示</div>)}></Route>
```
## Switch组件 保证每次值匹配一个路由 匹配到路由就不在继续往下匹配了
## 导航组件 Link和NavLink  Redirect重定向组件
 - to属性对应的几种写法 
 1. to: string to='/' 直接写pathname可以跟参数
 2.  to:object  <Link to={{pathname: "/courses"}}/> 
  * pathname: 表示要链接到的路径的字符串。
  * search: 表示查询参数的字符串形式。
  * hash: 放入网址的 hash，例如 #a-hash。
  * state: 状态持续到 location。通常用于隐式传参（埋点），可以用来统计页面来源
  3. to: function
```js
  <Link to={location => `${location.pathname}?nam=lili`} />
```
## <NavLink> 导航组件 
 1. activeClassName  激活时候的class 
 2. activeStyle  激活时候的样式  
 3. exact  
 4. strict  
>激活的navlink 会自动添加类名 .active 如果设置了activeClassName则不生效
##  路由hooks
>使用以下hooks你的reat版本需要16.8及以上 
1. useHistory  路由跳转
2. useParams  使用路径参数 
3. useLocation 获取当前路由路由信息  
4. useRouteMatch 用来匹配路由 参数可以传对象 参数同route 
```js
import React from 'react'
import {useRouteMatch} from 'react-router-dom'
function Blog(props) {
	
	return (
		<div>
			这是博客文章{props.match.params.title}
		</div>
	)
}
function Notfound(){
	 return 'notfound'
}
function ShowBlog(){
	 let  match =useRouteMatch({
		 path:'/blog/:title',
		 sensitive:true //大小写敏感 
	 })
	return match?<Blog match ={match}></Blog>:<Notfound/>
}

export default ShowBlog
```


 ```js

 import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
// 定义带子路由的组件如何渲染 
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}
 ```
## 受保护的路由  
1. 使用render函数  
```js
 <Route path="/lili" render ={(props)=>{
	 function login(){
		   props.history.push('/login')
		}
   //判断登录状态来进行页面跳转 
	return	isLogin?<Lili></Lili>:<button onClick={login}>请登录</button>
	}}></Route>
```
2. 使用高阶组件 
```js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;
```
## 路由过渡动画
1. 下载  npm i react-transition-group/yarn add react-transition-group
2. 引入组件 
```js
import { TransitionGroup, CSSTransition } from "react-transition-group";
```
3. 把所有的路由用一个Route组件包裹(主要作用是用来传递location)  用render函数的方式把所有的路由作为返回值  

