import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const KanBanBoard = () => {
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  return (
    <DragDropContext>
      <h2 style={{ textAlign: "center" }}>Progress Board </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Column title={'TO DO'} tasks={incomplete} id={'1'} />
      </div>
    </DragDropContext>
  );
};

export default KanBanBoard;
