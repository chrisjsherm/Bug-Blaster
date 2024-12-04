import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer, {
  actionSetSortPreference,
} from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
import { sortTickets } from "./utilities/sortingUtilities";
import { sortOptions } from "./data-model/sortOptions";

function App() {
  const defaultSortOrder = sortOptions[0].id;
  const initialState = {
    tickets: [
      {
        id: Math.random(),
        title: "First Ticket",
        description: "Low priority bug",
        priority: "1",
      },
      {
        id: Math.random(),
        title: "Another ticket",
        description: "Medium priority",
        priority: "2",
      },
    ],
    editingTicket: null,
    sortPreference: defaultSortOrder,
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);
  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>

        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        ></TicketForm>

        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <select
              value={defaultSortOrder}
              onChange={(e) =>
                dispatch({
                  type: actionSetSortPreference,
                  payload: e.target.value,
                })
              }
            >
              {sortOptions.map(({ id, label }) => {
                return (
                  <option value={id} key={id}>
                    {label}
                  </option>
                );
              })}
            </select>

            <TicketList
              tickets={sortedTickets}
              dispatch={dispatch}
            ></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
