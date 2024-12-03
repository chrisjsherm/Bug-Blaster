import React, { useState } from "react";
import { actionAddTicket } from "../reducers/ticketReducer";

export default function TicketForm({ dispatch }) {
  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const defaultPriority = "1";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(defaultPriority);

  function clearForm() {
    setTitle("");
    setDescription("");
    setPriority(defaultPriority);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const ticketData = {
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };
    dispatch({
      type: actionAddTicket,
      payload: ticketData,
    });

    clearForm();
  }

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="title">Description</label>
        <textarea
          id="description"
          type="text"
          value={description}
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <fieldset className="priority-fieldset">
        <legend>Priority</legend>

        {Object.entries(priorityLabels).map(([value, label]) => {
          return (
            <label key={value} className="priority-label">
              <input
                type="radio"
                value={value}
                checked={priority === value}
                className="priority-input"
                onChange={(e) => setPriority(e.target.value)}
              />
              {label}
            </label>
          );
        })}
      </fieldset>

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
