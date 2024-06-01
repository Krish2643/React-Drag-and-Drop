import React, { useEffect, useState } from "react";
import Todo from "../assets/direct-hit.png";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  let count = tasks.filter((e) => e.status === status);


  return (
    <section className="task_column">
      <h3 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title} {count.length} ISSUE
      </h3>
      <DropArea onDrop={() => onDrop(status, 0)} />
    
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <React.Fragment key={index} >
              <TaskCard
                title={task.task}
                des={task.des}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
                status={status}
              />
              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
      )}
    </section>
  );
};

export default TaskColumn;
