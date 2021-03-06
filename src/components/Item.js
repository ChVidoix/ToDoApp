import React, { useContext } from "react";
import "../styles/Item.css";
import { AppContext } from "../AppContext";

const Item = ({ task }) => {
  const { endTask, restoreTask } = useContext(AppContext);

  return (
    <div>
      <strong className={task.priority ? "priority" : null}>
        {task.content}
      </strong>
      {" do "}
      {task.date.slice(0, 10)}{" "}
      {task.active ? (
        <>
          <button onClick={() => endTask(task.id, true)}>
            zadanie zrobione
          </button>
          <button onClick={() => endTask(task.id, false)}>X</button>
        </>
      ) : (
        <>
          <button onClick={() => restoreTask(task.id)}>żartowałem</button>
          <button onClick={() => endTask(task.id, false)}>X</button>
          <p>zadanie zrobione {task.confirmDate.toLocaleString()}</p>
        </>
      )}
    </div>
  );
};

export default Item;
