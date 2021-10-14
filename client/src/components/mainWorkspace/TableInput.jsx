function TableInput({setId,setTitle,setDiscription,setStatus,setCreated_at,setDue_date}){
  
    var n =  new Date();
    var y = n.getFullYear();
    var m = n.getMonth() + 1;
    var d = n.getDate();
    var time = n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds();
    var DatenTime = d+"-"+m+"-"+y+"  "+time;
    return(
        <>
           <tr>
                <td >
                    {/* ID */}
                    {/* {setId(id=>id+1)} */}
                </td>
                <td>
                    {/* title */}
                    <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
                </td>
                <td>
                    {/* Description */}
                    <input type="text" onChange={(e)=>{setDiscription(e.target.value)}}/>
                </td>
                <td>
                    {/* Status */}
                    <input type="text" onChange={(e)=>{setStatus(e.target.value)}}/>
                </td>
                <td>
                    {/* Created_at */}
                    {DatenTime}
                    {setCreated_at(DatenTime)}
                </td>
                <td>
                    {/* Upadated_at */}                    
                </td>
                <td>
                    {/* Due_Date */}
                    <input type="date" onChange={(e)=>{setDue_date(e.target.value)}}/>
                </td>
            </tr>
            
        </>
    )
}

export default TableInput;