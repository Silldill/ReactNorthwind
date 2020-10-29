import React, {useEffect, useState} from 'react'

export default function Searchcustomer() {

    const [Search, setSearch] = useState();
    const [Result, setResult] = useState();
    const url = "https://localhost:5001/customer/search/"
    const url2 = "https://localhost:5001/";

    useEffect(() =>{


    if(Search == null || Search == "")
    {
        fetch(url2, { mode: 'cors'}).then(resp => resp.json()).then(data => setResult(data));
    }
    else
    {
       fetch(url + Search, { mode: 'cors'}).then(resp => resp.json()).then(data => setResult(data));
    }


    },[Search])

    function HandleChange(e)
    {
        setSearch(e.target.value)
    }

    if(Result != null)
    return (
        <div>
            <input onChange={HandleChange}/>
            {Result.map((i) =>
            <h1>{i.companyName}</h1>
            )}
        </div>
    )
    else
    return(<div>Loading</div>)
}
