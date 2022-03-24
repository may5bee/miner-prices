import React from 'react'
import ReactCountryFlag from "react-country-flag"
import { MDBDataTable } from 'mdbreact';


  const dataTest = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      }
      ],
      rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',

      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
      }
      ]
      };

function CreateTable({data, tableTitle}){

  const RowsFromData = data.map(
    (row)=>{
      console.log(row);
    return(
      <tr className="">
        <td>{row.minerName}</td>
        <td className={ row[ 'BT-Miners' ].inStock == false ? "outOfStock" : "" }><a  href={row[ 'BT-Miners' ].listingLink}>{row[ 'BT-Miners' ].price}</a></td>
{/*        <td className={ row[ 'Bitcoin Merch' ].inStock == false ? "outOfStock" : "" }><a  href={row[ 'Bitcoin Merch' ].listingLink}>{row[ 'Bitcoin Merch' ].price}</a></td>
*/}        <td className={ row[ 'AsicMarketPlace' ].inStock == false ? "outOfStock" : "" }><a  href={row[ 'AsicMarketPlace' ].listingLink}>{row[ 'AsicMarketPlace' ].price}</a></td>
        <td className={ row[ 'Miner Bros' ].inStock == false ? "outOfStock" : "" }><a  href={row[ 'Miner Bros' ].listingLink}>{row[ 'Miner Bros' ].price}</a></td>
        <td className={ row[ 'MiningCave' ].inStock == false ? "outOfStock" : "" }><a  href={row[ 'MiningCave' ].listingLink}>{row[ 'MiningCave' ].price}</a></td>
        <td className={ row[ 'ViperaTech' ].inStock == false ? "outOfStock" : "" }><a  href={row[ 'ViperaTech' ].listingLink}>{row[ 'ViperaTech' ].price}</a></td>
        <td className={ row[ 'CoinMining Central' ].inStock == false ? "outOfStock" : "" }><a  href={row[ 'CoinMining Central' ].listingLink}>{row[ 'CoinMining Central' ].price}</a></td>
      </tr>
      )
  }
  )
  return ( 
    <div>
      <table className="table table-striped ">
          <thead>
              <tr>
                <th>矿机</th>
                <th><ReactCountryFlag countryCode="US" /> BT-Miners</th>
{/*                <th> <ReactCountryFlag countryCode="US" /> Bitcoin Merch</th>
*/}                <th> <ReactCountryFlag countryCode="HK" /> AsicMarketPlace</th>
                <th> <ReactCountryFlag countryCode="HK" /> Miner Bros</th>
                <th> <ReactCountryFlag countryCode="CA" /> MiningCave</th>
                <th> <ReactCountryFlag countryCode="CA" /> ViperaTech</th>
                <th> <ReactCountryFlag countryCode="GB" /> CoinMining Central</th>
              </tr>
          </thead>
          <tbody>     
            {RowsFromData}
          </tbody>
      </table>
       <MDBDataTable
      striped
      bordered
      small
      data={dataTest}
      />
  </div>
  )
}

export default CreateTable;
