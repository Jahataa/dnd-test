import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import './main.css';
import * as serviceWorker from './serviceWorker';
import initialData from './initialData';
import Column from './column';

class App extends React.Component {
  state = initialData;

  onDragStar = () => {
    document.body.style.color = `rgba(248, 148, 6, 1)`;
    document.body.style.transition = 'background-color 0.2s ease';
  };

  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination 
    ? destination.index / Object.keys(this.state.tasks).length
    : 0;
    document.body.style.backgroundColor = `rgba(248, 148, 6, ${opacity})`;

  };

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const {destination, source, draggableId} = result;
    
    if(!destination){
      return;
    }
    
    if (
      destination.droppableId === source.droppableId && 
      destination.index === source.index
    ){
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId); 
  
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,

      }
    };

    this.setState(newState);


  }

  render(){
    return (
        <DragDropContext
          onDragStar={this.onDragStar}
          onDragUpdate={this.onDragUpdate}
          onDragEnd={this.onDragEnd}
        >
            {this.state.columnOrder.map((columnId)=>{
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId] );
          
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
    )
  }

}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
