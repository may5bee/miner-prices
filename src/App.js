import logo from './logo.svg';
import './App.css';
import CreateTable from './AntTable'
import minerData from './data/minerData.json'


function App() {
  // window.dataLayer.push({
  //   event: 'event',
  //   eventProps: {
  //     category: category,
  //     action: action,
  //     label: label,
  //     value: value
  //   }
  // });
  return (
    <div className="App">
      <div className="container">
      <div className="titleBlock">
      <h1>Miner Prices</h1>
      <div className="coloredBlock">...</div><span>= Out of Stock</span>
    </div>
        <CreateTable data={minerData}/>
      </div>
    </div>

    
  );
}

export default App;
