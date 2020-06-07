import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './task';


const Container = styled.div`
    border: 2px solid black ;
    border-radius: 2px;
    width: 200px;
    margin: 8px;

    display: flex;
    flex-direction: column;

`;

const Title = styled.p`
    padding: 10px;
`;

const Tasks= styled.div`
    padding: 10px;
    transition: background-color 0.2s ease;
    background-color: ${props =>(props.isDraggingOver ? 'rgba(248, 148, 6, 1)' : 'white')};
    flex-grow: 1;
    min-hight: 100px;
`;

export default class Column extends React.Component {
    render(){
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    { (provided, snapshot) =>(
                        <Tasks 
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver = {snapshot.isDraggingOver}
                            >
                            {this.props.tasks.map((task, index) => 
                                <Task 
                                    key={task.id} 
                                    task={task}
                                    index={index}
                                    />
                                )} 
                            {provided.placeholder}
                        </Tasks>
                    )}
                </Droppable>
            </Container>
        ) 
    }
}

