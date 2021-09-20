import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      {/* <Countries></Countries> */}
      <Countries></Countries>
    </div>
  );
}

// function Countries(){
// // Using useState to set Country Data
// const [countries, setCountries] = useState([]); 

// // Using useEffect to load country Data 
// useEffect(()=>{
//   fetch('https://restcountries.eu/rest/v2/all')
//   .then(res => res.json())
//   .then(data => setCountries(data))
  
// },[]);
// console.log(countries);



//   return(
//     <div>
//       <h1>All The Countries</h1>
//       <h4>Countries Available: {countries.length}</h4>
//       {
//         countries.map(country => <LoadCountry name={country.name}></LoadCountry> )
//       }
//     </div>


//   );
// }

// Load Country Component 
// function LoadCountry(props){
// return(
//   <div>
//   <h1>Name: {props.name}</h1>
//   <h4>Capital: {props.capital}</h4>
// </div>
// );
// }

export default App;
