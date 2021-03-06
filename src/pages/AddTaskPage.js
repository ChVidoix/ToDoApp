import NewTask from "../layouts/NewTask";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Item from "../components/Item";

const AddTaskPage = () => {
  const { tasks } = useContext(AppContext);
  let activeTasks = tasks
    .filter((task) => task.active)
    .sort((a, b) => {
      if (a.addedDate < b.addedDate) return 1;
      else if (a.addedDate > b.addedDate) return -1;
      else return 0;
    });

  activeTasks = activeTasks.slice(0, 3);
  const activeTasksList = activeTasks.map((task) => (
    <Item key={task.id} task={task} short={true} />
  ));
  return (
    <>
      <NewTask />
      <div className="recent">
        <h2>Ostatnio dodane</h2>
        <p>Wyświetlane są tylko 3 ostatnio dodane zadania</p>
        {activeTasksList}
      </div>
    </>
  );
};

export default AddTaskPage;
