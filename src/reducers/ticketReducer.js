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
      };

    case actionDeleteTicket:
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => {
          if (ticket.id === action.payload.id) {
            return false;
          }
          return true;
        }),
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
