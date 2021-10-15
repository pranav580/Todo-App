import { useState } from "react";

function PageNameInput({setInput,setpageList}){
    const [pageName,setPageName]=useState("")
    const addPage=()=>{
        const pagesName = {
            P_ID: Math.floor(Math.random()*1000),
            pageName,
            
        };
        setpageList(arr=>[...arr,pagesName]);
        setInput(false);
        
    }
    return(
        <div className="pageinput">
            <input type="text" onChange={(e)=>{setPageName(e.target.value)}}></input>
            <button type="submit" onClick={()=>{addPage();}}>Add</button>
        </div>
    )
};
export default PageNameInput;