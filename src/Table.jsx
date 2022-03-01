import React from 'react'

function JsonDataDisplay({data, tableTitle}){
  const DisplayData = data.map(
    (info)=>{
    return(
      <tr className={ info.seller == "Miner Bros" ? "minerbros" : ""}>
        <td>{info.seller}</td>
        <td><a href={info.link}>link</a></td>
        <td className="text-right">{info.price}</td>
      </tr>
      )
  }
  )
  return ( 
    <div>
      <table className="table table-striped ">
          <thead>
            <tr>
            <th colspan="3" className="text-center tableTitle">
            {tableTitle}
            </th>
            </tr>
              <tr>
                <th>Seller</th>
                <th>Link</th>
                <th className="text-right">Price</th>
              </tr>
          </thead>
          <tbody>     
            {DisplayData}
          </tbody>
      </table>
  </div>
  )
}

export default JsonDataDisplay;
