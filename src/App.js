import logo from './logo.svg';
import './App.css';
import JsonDataDisplay from './Table'

import KdBoxData from './data/kd-box.json'
import HsBoxData from './data/hs-box.json'
import MiniDogeData from './data/mini-doge.json'
import CkBoxData from './data/ck-box.json'
import LbBoxData from './data/lb-box.json'


function App() {
  return (
    <div className="App">
      <h1>Miner Prices and Coin Price</h1>
      <div className="container">
        <JsonDataDisplay data={KdBoxData} tableTitle="KD-BOX"/>
        <JsonDataDisplay data={HsBoxData} tableTitle="HS-BOX"/>
        <JsonDataDisplay data={MiniDogeData} tableTitle="Mini-Doge"/>
        <JsonDataDisplay data={CkBoxData} tableTitle="CK-BOX"/>
        <JsonDataDisplay data={LbBoxData} tableTitle="LB-BOX"/>
      </div>
    </div>
  );
}

export default App;
