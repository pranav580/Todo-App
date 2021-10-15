import React, { useState } from "react";
import TableInput from "./TableInput";


function Table({tableData, setTableData}){
    
    const [tInput, setTInput] = useState(false);
    const [id,setId] = useState(100);
    const [title,setTitle] = useState();
    const [discription,setDiscription] = useState();
    const [status,setStatus] = useState("To do");
    const [created_at,setCreated_at] = useState();
    const [updated_at,setUpdated_at] = useState();
    const [due_date,setDue_date] = useState();
   

    const AddBTN=()=>{
        return(
            <div className="addBTN" onClick={()=>{setTInput(true)}}>
                    + Add
                </div>
        )
    }
    const SubmitBTN=()=>{

        const submited=()=>{
            var n =  new Date();
            var y = n.getFullYear();
            var m = n.getMonth() + 1;
            var d = n.getDate();
            var time = n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds();
            var Time = d+"-"+m+"-"+y+"  "+time;
            setUpdated_at(Time);
            setCreated_at(Time);
            setId(id=>id+1)
            const Data = {
                id,
                title,
                discription,
                status,
                created_at,
                updated_at,
                due_date,
            }
            setTableData(arr=>[...arr,Data]);
            console.log(tableData);
            setTInput(false);
        }
        return(
            <div className="addBTN" onClick={()=>{submited()}}>
                + Submit
            </div>
        )
    }


    return(
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Created_at</th>
                        <th>Updated_at</th>
                        <th>Due_Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item)=>(
                        <tr key={item.id}>
                            <td>#{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.discription}</td>
                            <td>{item.status}</td>
                            <td>{item.created_at}</td>
                            <td>{item.updated_at}</td>
                            <td>{item.due_date}</td>
                        </tr>
                    ))}
                    {tInput? <TableInput 
                                setTableData={setTableData}
                                id={id} 
                                setId={setId} 
                                setTitle={setTitle} 
                                setDiscription={setDiscription} 
                                setStatus={setStatus} 
                                setCreated_at={setCreated_at}
                                setDue_date={setDue_date} 
                            />: null}
                    
                </tbody>
            </table>
            {tInput? <SubmitBTN/> : <AddBTN/>}
        </div>
    )
}
export default Table;