import { useEffect, useState } from 'react';
import Elements from './components/elements';
import './App.scss';

function App() {
  const [filterSelected, setFilerSelected] = useState('people');
  const [dataFetched, setDataFetched] = useState([]);

  const handleSearch = () => {
    fetchData();
  }

  const fetchData = () => {
    fetch(`https://swapi.dev/api/${filterSelected}`).then(
      res => res.json()
    ).then(
      (data) => setDataFetched(data)
    )
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        Star Wars App
      </header>
      <main className='container'>
        <h2>Filter using selector and then click Search</h2>
        <div className='filterBox'>
          <select value={filterSelected} onChange={(e)=>setFilerSelected(e.target.value)}>
            <option selected value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
        <Elements data={dataFetched} />
      </main>
    </div>
  );
}

export default App;
