import React from "react";
import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({
  title,
  handleDelete,
  index,
  setActiveCard,
  des,
  status,
}) => {
  const date = new Date();

  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <p className="task_description">{des}</p>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
      {status === "done"
        ? `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} `
        : ""}
    </article>
  );
};

export default TaskCard;
