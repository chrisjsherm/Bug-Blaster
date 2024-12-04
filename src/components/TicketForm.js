import React, { useState, useEffect } from "react";
import {
  actionAddTicket,
  actionClearEditingTicket,
  actionUpdateTicket,
} from "../reducers/ticketReducer";

export default function TicketForm({ dispatch, editingTicket }) {
  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

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
      id: editingTicket ? editingTicket.id : new Date().toISOString(),
      title,
      description,
      priority,
    };
    dispatch({
      type: editingTicket ? actionUpdateTicket : actionAddTicket,
      payload: ticketData,
    });

    clearForm();
  }

  function handleCancel() {
    dispatch({
      type: actionClearEditingTicket,
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

      {editingTicket && (
        <button className="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
