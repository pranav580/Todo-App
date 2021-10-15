import { DragDropContext,Droppable} from 'react-beautiful-dnd'
import Card from "./card";
import "./BoardView.css"
import { useState } from 'react';

function BoardView({ tableData, setTableData }){
    const [completedTodos, setcompletedTodos] = useState([]);
    const onDragEnd=(result)=>{
        const {source, destinatoin} = result;
        if(!destinatoin) return;
        if(destinatoin.droppableId===source.droppableId && destinatoin.index===source.index) return;

        let add,active = tableData,complete=completedTodos;
        if(source.droppableId === 'Todos'){
            add = active[source.index];
            active.splice(source.index, 1)
        }else{
            add = complete[source.index];
            complete.splice(source.index, 1)
        }

        if(source.droppableId === 'Todos'){
            active.splice(source.index, 0,add)
        }else{
            complete.splice(source.index, 0,add)
        }

        setcompletedTodos(complete);
        setTableData(active);
    }
    return(
        <DragDropContext onDragEnd={onDragEnd}>
        <div className="BoardView">
            <Droppable droppableId="TodosList">
                {
                    (provided)=>(
                        <div className="Todos" ref={provided.innerRef}{...provided.droppableProps}>
                        <span className="TodoHead">Todos</span>
                        {tableData.map((items,index)=>(
                            <Card items={items.title} index={index.toString()} key={index}/>
                        ))}
                        {provided.placeholder}
                        </div>
                    )
                }
                
            </Droppable>
            <Droppable droppableId="TodosDone">
                {
                    (provided)=>(
                        <div className="Done" ref={provided.innerRef}{...provided.droppableProps}>
                            <span className="TodoHead2">Done</span>
                            {completedTodos.map((items,index)=>(
                               <Card items={items} index={index}/>
                            ))}
                            {provided.placeholder}
                        </div>
                    )
                }
                
            </Droppable>            
        </div>
        </DragDropContext>
    )
}
export default BoardView;