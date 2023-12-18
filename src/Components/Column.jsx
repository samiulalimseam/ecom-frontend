import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  background-color: #black;
  border-radius: 2.5px;
  height: 480px;
  width: 300px;
  overflow-y: scroll;
  -ms-overlflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
`;

const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`;
const TaskList = styled.div`
  padding: 3px;
  transistion: background-color 0.2s ease;
  background-color: #f4f5f7;
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({ title, tasks, id }) => {
  return (
    <Container>
      <Title style={{ backgroundColor: "lightblue", position: "sticky" }}>
        {title}
      </Title>
      <Droppable droppableId={id}>
        {
            (provided, snapshot) => {
                <TaskList ref={provided?.innerRef}
                {...provided?.droppableProps}
                isDraggingOver={snapshot?.isDraggingOver}
                >

                    {/* Provide your tasks */}
                    {provided?.placeholder}
                </TaskList>
            }
        }
      </Droppable>
    </Container>
  );
};

export default Column;
