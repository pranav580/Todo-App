import MainWorkspace from './components/mainWorkspace';
import './App.css';
import { useState } from 'react';

function App() {
  const [tableData , setTableData] = useState([]);
  return (
    <div className="App">
      <MainWorkspace tableData={tableData} setTableData={setTableData}/>
    </div>
  );
}

export default App;
