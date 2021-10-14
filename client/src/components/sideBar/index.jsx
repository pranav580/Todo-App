import { useState } from 'react';
import './sideBar.css';
import pagesListData from '../Data/pagesList';

function PageNameInput({setInput,pageList,setpageList}){
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

function SideBar() {
    // eslint-disable-next-line
    const [pageList,setpageList] = useState([]);
    const [input,setInput] = useState(false);
    const deletePAge=()=>{
        
    }
    return(
        <div className="sidebar">
            <div className="signIn">
                <h4>Sign in</h4>
            </div>
            <div className="modes">
                <div className="Dark">Dark</div>
                <div className="Light">Light</div>
            </div>
            <hr />
            <div className="fav">
                <h1 className="favhead">FAVORITES</h1>
                <div className="favList">
                    Empty
                </div>
            </div>
            <hr />
            <div className="page">
                <h1 className="pagehead">PAGES</h1>
                <div className="pageList">
                    {pageList.map((item)=>(
                        <div key={item.P_ID} className="PageItems">
                            <div className="name">{item.pageName}</div>
                            <div className="deleteBTN" onClick={()=>{deletePAge(item.P_ID)}}>D</div>
                        </div>
                    ))}
                </div>

                {input? <PageNameInput setInput={setInput} pageList={pageList} setpageList={setpageList}/> : console.log(input)}

                <div className="addBTN" onClick={()=>{setInput(true)}}>
                    + Add Page
                </div>
            </div>
        </div>
    )
    
}


export default SideBar;