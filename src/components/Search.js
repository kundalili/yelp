import React, { useState } from 'react';

import './Search.css';

import { useGlobalState, setGlobalState } from './state/states';

export default function Search() {

    const [data] = useGlobalState("data");
    const [location] = useGlobalState("location")
    const [comments] = useGlobalState("comments")
    
    console.log ("Data comes to Search:", data, comments)


    // the value of the search field 
  const [name, setName] = useState('');
  
  // the search result
  const [foundItems, setFoundItems] = useState([]);

  const filter = (e) => {
    const myarr=[...data];
    const keyword = e.target.value;
    console.log("search:", keyword)

    if (keyword !== '') {
          const results = myarr.filter((item) => {
            console.log("item:", item)
            return item.name.toLowerCase().includes(keyword.toLowerCase());
        });

        setFoundItems(results);
     } else {
        setFoundItems([]);
    }
    console.log("search:",[...foundItems])
    setName(keyword);
  };

  function handleSearch(e){
    if (e.key==="Enter") {
        console.log("search result will be set global:", foundItems)
        if (foundItems.length>0) {
          console.log("search result:",foundItems)
          setGlobalState("sdata", foundItems)
          
        };
        setName("")
        setFoundItems([]);
    }
  }
  console.log("loc in search:",location)
  return (
    <div className="container flex gap-[20px] font-bold p-[20px] flex-row">
      {
        Object.keys(location).length>0
        ?<h1>{location.city}</h1>
        : <div></div>
      }
      <input
        type="search"
        value={name}
        onChange={filter}
        onKeyDown={handleSearch}
        className="input rounded-md placeholder-slate-300"
        placeholder="Filter"
      />


      <div className="item-list">
        {foundItems && foundItems.length > 0 
         ? (
            foundItems.map((item,idx) => {if (idx<5) return (
              <li key={item.id} className="item">
                <span className="item-name">{item.name}</span>
                <span> - </span>
                <span className="item-city">{item.city}</span>
              </li>
            )})
            ) 
          : (
              <div></div>
            )}
      </div>
      
    </div>
  );
}

