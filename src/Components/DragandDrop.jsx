import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const DragandDrop = () => {
    const onDragEnd = (e) => {
        console.log(e);
    }
    const items = [
        { id: 'item-1', content: 'Item 1 content' },
        { id: 'item-2', content: 'Item 2 content' },
        { id: 'item-3', content: 'Item 3 content' },
        // Add more items as needed
      ];
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.droppableRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} index={index} draggableId={item.id}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                      margin: '5px',
                      padding: '10px',
                      backgroundColor: '#eee',
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragandDrop;
