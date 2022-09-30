import './App.css';
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Search from './components/Search';



export default function App() {

  const [data, setData] = useState([])

  console.log ("hello from Searchnewlist")

  async function getData() {
    let response;
    try {
      
      response = await fetch("https://cross-yelp-ali.herokuapp.com/api/restaurants")

      const data2 = await response.json()

      console.log("🚀 ~ data", data2)
      setData(data2)
    } 
    catch (error) {
      console.log('ERROR:', error.message) 
      alert('error getting data')
    }
  } 

  useEffect(() => {
    
    getData()
  
  }, [])



  return (
    <div>
        <Search data={data}/>
        This Part will load data and make search
    </div>
  );
}

