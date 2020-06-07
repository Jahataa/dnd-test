import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 2px solid black;
    border-radius:4px;
    margin-bottom: 8px;
    padding: 10px;
    background-color: ${props =>(props.isDragging ? 'lightblue' : 'lightgreen')};

    display: flex;
`;

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: rgba(248, 148, 6, 1);
    border-radius: 4px;
    margin-right: 8px;
`;

export default class Task extends React.Component {
    render(){
        return (
            <Draggable
            draggableId={this.props.task.id}
            index={this.props.index}>
                    {(provided, snapshot ) => (
                        <Container                     
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            isDragging={snapshot.isDragging}
                            >
                            <Handle 
                            {...provided.dragHandleProps}
                            />
                                {this.props.task.content}                      
                        </Container>
                    )}
            </Draggable>
        ) 
    }
}

