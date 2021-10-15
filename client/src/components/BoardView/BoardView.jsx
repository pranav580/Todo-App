import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Card from "./card";
import "./BoardView.css"
import { useState } from 'react';
function BoardView({ tableData }){
    const [completedTodos, setcompletedTodos] = useState([]);

    return(
        <DragDropContext onDragEnd={()=>{}}>
        <div className="BoardView">
            <Droppable droppableId="TodosList">
                {
                    (provided)=>(
                        <div className="Todos" ref={provided.innerRef}{...provided.droppableProps}>
                        <span className="TodoHead">Todos</span>
                        {tableData.map((items,index)=>(
                            <Draggable draggableId={index.toString()} >
                            {
                                (provided)=>(
                                    <div className="Card" key={index} {...provided.draggableProps}{...provided.dragHandleProps} ref={provided.innerRef}>
                                {items.title}
                            </div>
                                )
                            }
                            </Draggable>
                        ))}
                        </div>
                    )
                }
                
            </Droppable>
            <Droppable droppableId="TodosDone">
                {
                    (provided)=>(
                        <div className="Done" ref={provided.innerRef}{...provided.droppableProps}>
                            <span className="TodoHead">Done</span>
                            {completedTodos.map((items,index)=>(
                                <div className="Card" key={index}>
                                    {items}
                                </div>
                            ))}
                        </div>
                    )
                }
                
            </Droppable>            
        </div>
        </DragDropContext>
    )
}
export default BoardView;