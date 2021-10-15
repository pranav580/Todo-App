import { useState } from 'react';
import PageNameInput from './pageinptu';
import './sideBar.css';



function SideBar({pageList,setpageList}) {
    
    const [input,setInput] = useState(false);

    const deletePAge=(id)=>{
        const oldPageList = [...pageList];
        const NewPageList = oldPageList.filter((items)=>items.P_ID !== id);
        setpageList(NewPageList);
        console.log(pageList);
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

                {input? <PageNameInput setInput={setInput} setpageList={setpageList}/> : null}

                <div className="addBTN" onClick={()=>{setInput(true)}}>
                    + Add Page
                </div>
            </div>
        </div>
    )
    
}


export default SideBar;