import React, { useState } from 'react';
import './App.css';
import Tableelement from './Tableelement';

function App() {
  const [data, setData] = useState([
    {
      "id": 1,
      "name": "ExpertSender",
      "sites": 0,
      "type": "email",
      "status": "blocked"
    },
    {
      "id": 2,
      "name": "Tag Commander",
      "sites": 0,
      "type": "tag_manager",
      "status": "blocked"
    },
    {
      "id": 3,
      "name": "Ysance",
      "sites": 0,
      "type": "dmp_crm",
      "status": "blocked"
    },
    {
      "id": 4,
      "name": "AT Internet",
      "sites": 1,
      "type": "analytics",
      "status": "enable"
    },
    {
      "id": 5,
      "name": "Content Square",
      "sites": 3,
      "type": "analytics",
      "status": "enable"
    },
    {
      "id": 6,
      "name": "Google Tag Manager",
      "sites": 2,
      "type": "tag_manager",
      "status": "enable"
    },
    {
      "id": 7,
      "name": "Heatmap",
      "sites": 1,
      "type": "heatmap",
      "status": "enable"
    },
    {
      "id": 8,
      "name": "Tealium",
      "sites": 0,
      "type": "dmp_crm",
      "status": "disable"
    },
    {
      "id": 9,
      "name": "Emarsys",
      "sites": 0,
      "type": "email",
      "status": "disable"
    }])
  const [sortState, setSortState] = useState({dir: true, col:null})
  const [searchData, setSearchData] = useState(null)

  const sortData = (column) => {
    if (sortState.dir || column !== sortState.col) {
      setData(data.slice(0).sort((a,b) => a[column] > b[column] ? 1 : -1))
      setSortState({...sortState, dir: false, col:column})
    }
    else {
      setData(data.slice(0).sort((a,b) => a[column] > b[column] ? -1 : 1))
      setSortState({...sortState, dir: true, col:column})
    }
  }
  const checkSearch = (el) => {
    if (searchData) {
       return el['name'].toLowerCase().includes(searchData.toLowerCase()) 
    }
    else return true
  }

  return (
    <div className="App">
      <div className = 'mainWrapper'>
        <input type = 'text' onChange = {e => setSearchData(e.target.value)} placeholder = 'Search by name'/>
        <div className = 'currentTable'>
          <table>
            <thead>
              <tr>
                <th onClick = {() => sortData('name')}>Tool name {sortState.col === 'name' ? (sortState.dir ? '↓' : '↑') : null}</th>
                <th onClick = {() => sortData('sites')}>Used on {sortState.col === 'sites' ? (sortState.dir ? '↓' : '↑') : null}</th>
                <th onClick = {() => sortData('type')}>Type {sortState.col === 'type' ? (sortState.dir ? '↓' : '↑') : null }</th>
                <th onClick = {() => sortData('status')}>Status {sortState.col === 'status' ? (sortState.dir ? '↓' : '↑') : null}</th>
              </tr>
            </thead>
            <tbody>
              {data.filter(el => checkSearch(el)).length ? data.filter(el => checkSearch(el)).map(elem => <Tableelement {...elem}/>) : <p>No results, sorry :(</p> }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
