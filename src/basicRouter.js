import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Home() {
  return (
    <h2>我是首页</h2>
  )
}
function Course() {
  return (
    <h2>我是课程</h2>
  )
}
function User() {
  return (
    <h2>我是首页</h2>
  )
}
class Basic_router extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* 定义路由页面 */}
          <ul>
            <li>
              <Link to='/'>首页</Link>
            </li>
            <li>
              <Link to='/course'>课程</Link>
            </li>
            <li>
              <Link to='/user'>用户</Link>
            </li>
          </ul>

          {/* 配置路由 */}
          {/* 为什么要加exact  这是因为包含式匹配,加上exact之后,表示确切匹配 */}
          <Route exact path='/' component={Home}></Route>
          <Route path='/course' component={Course}></Route>
          <Route path='/user' component={User}></Route>
        </div>

      </Router>
    );
  }
}

export default Basic_router;
