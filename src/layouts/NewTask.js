import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/NewTask.css";
import { Prompt } from "react-router-dom";
const NewTask = () => {
  const { handleAddTask } = useContext(AppContext);

  const currDate = new Date();
  const currDateISO = currDate.toISOString().slice(0, 10);
  const maxDate = String(currDate.getFullYear() + 5) + currDateISO.slice(4, 10);

  const [content, setContent] = useState("");
  const [priority, setPriority] = useState(false);
  const [dateInput, setDateInput] = useState(currDateISO);

  const handleInput = (e) => {
    if (e.target.type === "checkbox") {
      setPriority(e.target.checked);
    } else {
      if (e.target.type === "text") {
        setContent(e.target.value);
      } else {
        setDateInput(e.target.value);
      }
    }
  };

  const handleClick = (content, priority, date, currDate) => {
    if (dateInput > maxDate || dateInput < currDateISO) {
      setDateInput(currDateISO);
    } else if (content === "") {
      alert("Nie możesz dodać pustego zadania!");
    } else {
      handleAddTask(content, priority, date, currDate);

      setContent("");
      setPriority(false);
      setDateInput(currDateISO);

      alert(
        "Zadanie zostało dodane pomyślnie! Możesz nim zarządzać w zakładce Lista"
      );
    }
  };

  return (
    <>
      <h2>Dodaj nowe zadanie</h2>
      <div className="form">
        <label htmlFor="content">
          Podaj treść zadania:{" "}
          <input
            type="text"
            id="content"
            name="content"
            placeholder="dodaj zadanie..."
            value={content}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="date">
          Podaj datę zadania:{" "}
          <input
            type="date"
            name="date"
            min={currDateISO}
            max={maxDate}
            value={dateInput}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="priority">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            checked={priority}
            onChange={handleInput}
          />
          Oj ważne byczq
        </label>
        <br />
        <button
          className="submit"
          onClick={() => {
            handleClick(
              content,
              priority,
              new Date(dateInput).toISOString(),
              currDate.toISOString()
            );
          }}
        >
          DODAJ
        </button>
      </div>

      <Prompt
        when={content.length !== 0}
        message="Zostawiłeś niewypełniony formularz, na pewno chcesz opuścić stronę?"
      />
    </>
  );
};

export default NewTask;
