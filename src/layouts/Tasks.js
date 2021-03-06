import React, { useContext } from "react";
import Item from "../components/Item";
import { AppContext } from "../AppContext";

const Tasks = () => {
  const { tasks, endTask } = useContext(AppContext);
  const activeTasks = tasks.filter((task) => task.active);
  const inactiveTasks = tasks.filter((task) => !task.active);

  activeTasks.sort((a, b) => {
    if (a.date < b.date) return -1;
    else if (a.date > b.date) return 1;
    else return 0;
  });

  inactiveTasks.sort((a, b) => {
    if (a.content < b.content) return -1;
    else if (a.content > b.content) return 1;
    else return 0;
  });

  inactiveTasks.sort((a, b) => b.content - a.content);

  const activeTasksList = activeTasks.map((task) => (
    <Item key={task.id} task={task} endTask={endTask} />
  ));
  const inactiveTasksList = inactiveTasks.map((task) => (
    <Item key={task.id} task={task} />
  ));

  return (
    <div className="mainList">
      <div className="activeTasks">
        <h2>
          Do zrobienia ({tasks.filter((task) => task.active === true).length}){" "}
        </h2>
        {activeTasksList.length > 0 ? (
          activeTasksList
        ) : (
          <h6>brak zadań do wykonania</h6>
        )}
      </div>
      <div className="inactiveTasks">
        <h2>
          Ukończono ({tasks.filter((task) => task.active === false).length})
        </h2>
        {inactiveTasksList.length > 0 ? (
          inactiveTasksList
        ) : (
          <h6>brak ukończonych zadań</h6>
        )}
      </div>
    </div>
  );
};

export default Tasks;
