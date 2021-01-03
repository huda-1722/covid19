import ReactDOM from 'react-dom';
import './covid19/css/style.css';
//import Search from'./covid19/Search';
//import as *que from './Var'
import App from './App';
import reportWebVitals from './reportWebVitals';
/*fetch('https://api.covid19api.com/summary')
.then((data)=>{ return data.json();})
.then((actual)=>{ console.log(actual);})
.catch((error)=>{console.log('can not find');})
const fetchapi = async ()=>{ s
  const res= await fetch('https://api.covid19api.com/summary');
  const actual=await res.json();
  console.log(actual);
}*/

ReactDOM.render(
  <>
  <App></App>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
