import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const HomePage = () => {
  const currDate = new Date().toISOString();
  const { tasks } = useContext(AppContext);
  const all = tasks.length;
  const active = tasks.filter((task) => {
    if (task.date > currDate) return task.active;
    else return false;
  }).length;

  const done = tasks.filter((task) => {
    if (task.confirmDate != null) {
      return task.confirmDate <= task.date;
    } else return false;
  }).length;

  const notDone = tasks.filter((task) => {
    if (task.confirmDate != null) {
      return task.confirmDate > task.date;
    } else return task.date < currDate;
  }).length;

  return (
    <>
      <div className="top">
        <div className="all">
          Wszystkie zadania
          <h1>{all}</h1>
        </div>
        <div className="notDone">
          Niewykonane
          <h1>{notDone}</h1>
        </div>
      </div>
      <div className="bottom">
        <div className="done">
          Ukończone
          <h1>{done}</h1>
        </div>
        <div className="notDoneYet">
          Do wykonania
          <h1>{active}</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
