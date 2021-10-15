import MainWorkspace from './components/mainWorkspace';
import './App.css';
import { useState } from 'react';

function App() {
  const [tableData , setTableData] = useState([]);
  const [pageList,setpageList] = useState([]);
  return (
    <div className="App">
      <MainWorkspace 
        tableData={tableData}
        setTableData={setTableData} 
        pageList={pageList} 
        setpageList={setpageList}
      />
    </div>
  );
}

export default App;
