import React from 'react';
import { Droppable } from 'react-beautiful-dnd'
import Task from './task'


const containerStyle ={
    border: `2px solid black`,
    hight: `100%`,
    width: '200px',
    margin: `auto`,
    padding: `20px`

}

const titleStyle ={
    padding: `10px`

}

const taskStyle ={
    padding: `10px`,

}

export default class Column extends React.Component {
    render(){
        return (
            <div style={containerStyle}>
                <div style={titleStyle}>{this.props.column.title}</div>
                <Droppable droppableId={this.props.column.id}>
                    { provided =>(
                        <div 
                            style={taskStyle}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            >
                            {this.props.tasks.map((task, index) => 
                                <Task 
                                    key={task.id} 
                                    task={task}
                                    index={index}
                                    />
                                )} 
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        ) 
    }
}

