import React, {useEffect, useState} from 'react'

export default function Customers() {

    // const url = "https://localhost:5001/";
    const url2 = "https://localhost:5001/customer/wildsearch"
    const [count, setcont] = useState();
    const [companyName, SetcompanyName] = useState("");
    const [Id, setId] = useState("");
    const [contactName, setContactName] = useState("");
    let CustomersData;

    // useEffect(() => {

    //     var currenetData;
    //     fetch(url, { mode: 'cors'}).then(resp => resp.json()).then(data => setcont(data));
    //     console.log(currenetData)

    //   },[]);

      useEffect(() => {

        var url = new URL(url2),
        params = {id:Id, contactname:contactName, companyname:companyName}
     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        fetch(url).then(resp => resp.json()).then(data => setcont(data));


      },[companyName, Id, contactName])

      function HandleCompany(e)
      {
          SetcompanyName(e.target.value)
          console.log("sup?")

      }
      function HandleId(e)
      {
          setId(e.target.value)

      }
      function HandleContactName(e)
      {
          setContactName(e.target.value)

      }

      if(count != null)
    return (
       
        <div>
            <table>
                <tr>
                    <th>CompanyName</th>
                    <th>ID</th>
                    <th>ContactName</th>
                </tr>
                <tr>
                    <th><input onChange={HandleCompany}/></th>
                    <th><input onChange={HandleId}/></th>
                    <th><input onChange={HandleContactName}/></th>
                </tr>
            {count.map((i) =>
                <tr>
                    <td>{i.companyName}</td>
                    <td>{i.customerID}</td>
                    <td>{i.contactName}</td>
                </tr>
            )}
            </table>
            
            
            
        </div>
    )

        else
        {
            return(<div>Loading</div>)

        }
    
}
