import { Draggable } from 'react-beautiful-dnd'
const Card = ({items,index})=>{
    
    return(
        <Draggable draggableId={index.toString()} index={index}>
        {
            (provided)=>(
                <div className="Card" {...provided.draggableProps}{...provided.dragHandleProps} ref={provided.innerRef}>
                    {items}
                    
                </div>
            )
        }
        </Draggable>
    )
}

export default Card;