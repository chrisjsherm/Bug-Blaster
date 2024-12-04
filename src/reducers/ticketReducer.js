export const actionAddTicket = "ADD_TICKET";
export const actionUpdateTicket = "UPDATE_TICKET";
export const actionDeleteTicket = "DELETE_TICKET";
export const actionSetEditingTicket = "SELECT_TICKET_TO_EDIT";
export const actionClearEditingTicket = "CLEAR_TICKET_TO_EDIT";

export default function ticketReducer(state, action) {
  switch (action.type) {
    case actionAddTicket:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };

    case actionUpdateTicket:
      return {
        ...state,
        tickets: state.tickets.map((ticket) => {
          if (ticket.id === action.payload.id) {
            return action.payload;
          }

          return ticket;
        }),
        editingTicket: null,
      };

    case actionDeleteTicket:
      let editingTicket = state.editingTicket;
      if (state.editingTicket && state.editingTicket.id === action.payload.id) {
        // We're deleting ticket we're currently editing.
        editingTicket = null;
      }
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => {
          if (ticket.id === action.payload.id) {
            return false;
          }
          return true;
        }),
        editingTicket,
      };

    case actionSetEditingTicket:
      return {
        ...state,
        editingTicket: action.payload,
      };

    case actionClearEditingTicket:
      return {
        ...state,
        editingTicket: null,
      };

    default:
      return state;
  }
}
