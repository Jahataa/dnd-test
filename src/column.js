import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './task';


const Container = styled.div`
    border: 2px solid black ;
    hight: 100%;
    width: 200px;
    margin: auto;
    padding: 20px;

`;

const Title = styled.p`
    padding: 10px;
`;

const Tasks= styled.div`
    background-color: 0.2s ease;
    padding: 10px;
    background: ${props =>(props.isDraggingOver ? 'rgba(248, 148, 6, 1)' : 'white')};
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

