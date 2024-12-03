import React from "react";
import {
  actionDeleteTicket,
  actionSetEditingTicket,
} from "../reducers/ticketReducer";

export default function TicketItem({ ticket, dispatch }) {
  const { title, description, priority } = ticket;

  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[priority]}`}></div>

      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className="button"
        onClick={() =>
          dispatch({
            type: actionDeleteTicket,
            payload: { id: ticket.id },
          })
        }
      >
        Delete
      </button>

      <button
        className="button"
        onClick={() =>
          dispatch({
            type: actionSetEditingTicket,
            payload: ticket,
          })
        }
      >
        Edit
      </button>
    </div>
  );
}
