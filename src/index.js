import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
/*ReactDOM.render(
 /!* <React.StrictMode>
    <App />
  </React.StrictMode>,*!/
  <App />,
  document.getElementById('root')
);*/
import basicRouter from './basicRouter'
console.log(14, basicRouter)
/**********************study***********************/
const tabList =
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
const user = {
  firstName: 'personA',
  lastName: 'personB'
}
const h1Style = {
  fontSize: 100,
  color: 'blue'
}
const arr = [3,4,5]
function formatUser(user) {
  console.log(26, user)
  return user.firstName
}
ReactDOM.render(
  <div>
    <h1 style={h1Style}>lfz</h1>
    {tabList}
    <h2>{formatUser(user)}</h2>
    {arr}
  </div>,
  document.getElementById('test')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
