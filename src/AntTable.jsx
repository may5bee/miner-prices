import React from 'react'
import ReactCountryFlag from "react-country-flag"
import { Table, Tag, Space } from 'antd';


function CreateTable({data}){

  // data.forEach((miner) => {
  //   console.log(miner);
  // });


const columns = [
      {
        title: 'Name',
        dataIndex: 'minerName',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a.minerName.localeCompare(b.minerName)
      },
      {
        title: 'Bitcoin Merch',
        dataIndex: 'Bitcoin Merch',
        defaultSortOrder: 'ascend',
        render: obj => {
          return(
          <a className={`purchaselink ${obj.inStock === false ? "outOfStock" : ""}`} target="_blank" href={obj.listingLink}>{obj.price}</a>
          )
        },
      
        
      },
      {
        title: 'AsicMarketPlace',
        dataIndex: 'AsicMarketPlace',
        defaultSortOrder: 'ascend',
        render: obj => {
          return(
          <a className={`purchaselink ${obj.inStock === false ? "outOfStock" : ""}`} target="_blank" href={obj.listingLink}>{obj.price}</a>
          )
        },
      },
      {
        title: 'Miner Bros',
        dataIndex: 'Miner Bros',
        defaultSortOrder: 'ascend',
        render: obj => {
          return(
          <a className={`purchaselink ${obj.inStock === false ? "outOfStock" : ""}`} target="_blank" href={obj.listingLink}>{obj.price}</a>
          )
        },
      },
      {
        title: 'Mining Cave',
        dataIndex: 'MiningCave',
        defaultSortOrder: 'ascend',
        render: obj => {
          return(
          <a className={`purchaselink ${obj.inStock === false ? "outOfStock" : ""}`} target="_blank" href={obj.listingLink}>{obj.price}</a>
          )
        },
      },
      {
        title: 'ViperaTech',
        dataIndex: 'ViperaTech',
        defaultSortOrder: 'ascend',
        render: obj => {
          return(
          <a className={`purchaselink ${obj.inStock === false ? "outOfStock" : ""}`} target="_blank" href={obj.listingLink}>{obj.price}</a>
          )
        },
      },
      {
        title: 'CoinMiningCentral',
        dataIndex: 'CoinMining Central',
        defaultSortOrder: 'ascend',
        render: obj => {
          return(
          <a className={`purchaselink ${obj.inStock === false ? "outOfStock" : ""}`} target="_blank" href={obj.listingLink}>{obj.price}</a>
          )
        },
      },
    ];


    return ( <Table columns={columns} dataSource={data} pagination={false} />
      )
}

export default CreateTable;
