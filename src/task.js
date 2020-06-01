import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const containerStyle = {
    border: `2px solid black`,
    "border-radius":`4px`,
    "margin-bottom": `8px`,
    padding: `10px`,
    "background-color": `lightblue`,

}

export default class Task extends React.Component {
    render(){
        return (
            <Draggable
            draggableId={this.props.task.id}
            index={this.props.index}>
                    {(provided, snapshot ) => (
                        <div 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        >
                        {console.log(this.props.isDragging)}
                            <div 
                                style={containerStyle}                       
                                >
                                {this.props.task.content}
                            </div>                           
                        </div>
                    )}
            </Draggable>
        ) 
    }
}

