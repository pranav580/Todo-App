import { useState } from "react";
import SideBar from "../sideBar";
import './mainWorkspace.css';
import Table from "./table";
import BoardView from "../BoardView/boardView";

function MainWorkspace({tableData, setTableData}){
    const [BoardTable, setBoardTable] = useState(true)

    return(
        <div className="mainWorkspace">
            <SideBar/>
            <div className="WorkSpace">
                <div className="TableBoard">
                    <div className="tableView" onClick={()=>{setBoardTable(true)}}>Table</div>
                    <div className="boardView" onClick={()=>{setBoardTable(false)}}>Board</div>
                </div>
                {BoardTable? <Table tableData={tableData} setTableData={setTableData}/> : <BoardView tableData={tableData}/>}
            </div>
        </div>
    )
}

export default MainWorkspace;