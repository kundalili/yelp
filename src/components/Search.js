import { useState } from "react"

export default function Search ({data}){

    const [result, setResult] = useState("");
    const [dataList, setDataList] = useState(data);
    const [sText, setSText] = useState("");
    const [found, setFound]=useState([])

    function finddata(text){
        return text.includes(sText)
    }

    const handleSearch=(e)=>{
        console.log(dataList)
        console.log(e.target.value)
        const myarr=""; 
        for (let i=0;i<dataList.length;i++){
            if (finddata(dataList[i])){
                myarr.concat(dataList[i],"\n")
            }
            if (myarr.length===5) break;
        }
        if (myarr) setResult(myarr)
        console.log(myarr)
    }

    return(
        <div>
            <input type="text" onChange={handleSearch}/>
            <textarea rows="5" cols="30">
                {}
            </textarea>
        </div>
    )
}
//the search input field can be a selecet componenets with options?