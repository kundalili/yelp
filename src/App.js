import './App.css';
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Search from './components/Search';
import CardContainer from "./components/pages/CardContainer"
import CardDetail from "./components/pages/CardDetail"


export default function App() {

  const [data, setData] = useState()

  const [sdata, setSdata] = useState([])

  console.log ("hello from Searchnewlist")

  async function getData() {
    let response;
    try {
      
      response = await fetch("https://cross-yelp-ali.herokuapp.com/api/restaurants")

      console.log ("resp:",response)
      const data2 = await response.json()

      console.log("🚀 ~ data", data2)
      setData(data2.data)
    } 
    catch (error) {
      console.log('ERROR:', error.message) 
      alert('error getting data')
    }
  } 

  useEffect(() => {
    
    getData()
    console.log(" API data", data)
  
  }, [])


  function handleSearch(sdata){
    console.log("search finish:",sdata)
    setSdata(sdata);
  }

  return (
    <div>
      <div>
          {
          data? <Search sdata={data} cb={handleSearch}/>:<div></div>
          }
      </div>     

      <div>  
        { 
        sdata.length>1?
          <CardContainer />
          :<CardDetail />
        }
      </div>    
    </div>
  );
}

