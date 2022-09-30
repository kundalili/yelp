import React, { useState } from 'react';

import './Search.css';


export default function Search({sdata, cb}) {

    console.log ("Search data:", sdata)


    // the value of the search field 
  const [name, setName] = useState('');
  const [data, setData] = useState([sdata]);

  // the search result
  const [foundItems, setFoundItems] = useState([]);

  const filter = (e) => {
    const keyword = e.target.value;
    console.log("search:", keyword)

    if (keyword !== '') {
        console.log("searching data:", sdata)
        const myarr=sdata;
        console.log("myarr", myarr)
        const results = sdata.filter((item) => {
            console.log("item:", item)
            return item.name.toLowerCase().includes(keyword.toLowerCase());
            
        });
        setFoundItems(results.slice(0,2));
    } else {
      console.log("data loading:", data)
      setFoundItems([])
     
      
    }

    setName(keyword);
  };

  function handleSearch(e){
    if (e.key==="Enter") {
        console.log("search:", foundItems)
        cb([...foundItems])
        setFoundItems([]);
        setName("")
        
    }
  }
  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        onKeyUp={handleSearch}
        className="input"
        placeholder="Filter"
      />


      <div className="item-list">
        {foundItems && foundItems.length > 0 ? (
          foundItems.map((item) => (
            <li key={item.id} className="item">
              <span className="item-name">{item.name}</span>
              <span> - </span>
              <span className="item-city">{item.city}</span>
            </li>
          ))
        ) : (
          <h1></h1>
        )}
      </div>
    </div>
  );
}

