import React, { useState } from "react";
import "../styles/App.css";
import Page from "./Page";
import { AppContext } from "../AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import sampleTasks from "../data";

const App = () => {
  const [tasks, setTasks] = useState(sampleTasks);
  const [counter, setCounter] = useState(8);

  const handleAddTask = (content, priority, date, currDate) => {
    setTasks(
      tasks.concat({
        id: counter,
        content,
        priority,
        date,
        active: true,
        addedDate: currDate,
        confirmDate: null,
      })
    );

    setCounter(counter + 1);
  };

  const endTask = (id, isFinished) => {
    let updatedTasks = [...tasks];
    if (isFinished) {
      updatedTasks.forEach((task) => {
        if (task.id === id) {
          task.active = false;
          task.confirmDate = new Date().toISOString();
        }
      });
    } else {
      updatedTasks = updatedTasks.filter((task) => task.id !== id);
    }
    setTasks(updatedTasks);
  };

  const restoreTask = (id) => {
    let updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.active = true;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Router>
        <header>
          <Navigation />
        </header>
        <main>
          <AppContext.Provider
            value={{ tasks, handleAddTask, endTask, restoreTask }}
          >
            <Page />
          </AppContext.Provider>
        </main>
      </Router>
    </div>
  );
};

export default App;
