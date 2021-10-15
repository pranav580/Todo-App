import { useState } from "react";
import SideBar from "../sideBar";
import './mainWorkspace.css';
import Table from "./table";
import BoardView from "../BoardView/boardView";

function MainWorkspace({tableData, setTableData, pageList, setpageList }){
    const [BoardTable, setBoardTable] = useState(true)
    
    return(
        <div className="mainWorkspace">
            <SideBar pageList={pageList} setpageList={setpageList} />
            <div className="WorkSpace">
                <div className="TableBoard">
                    <div className="tableView" onClick={()=>{setBoardTable(true)}}>Table</div>
                    <div className="boardView" onClick={()=>{setBoardTable(false)}}>Board</div>
                </div>
                {BoardTable? <Table tableData={tableData} setTableData={setTableData}/> : <BoardView tableData={tableData} setTableData={setBoardTable}/>}
            </div>
        </div>
    )
}

export default MainWorkspace;