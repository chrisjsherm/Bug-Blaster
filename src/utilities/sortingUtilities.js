export const sortTickets = (tickets, preference) => {
  console.log("Running sorting utility");
  switch (preference) {
    case "0":
      return [...tickets].sort((a, b) => {
        return b.priority.localeCompare(a.priority);
      });

    case "1":
      return [...tickets].sort((a, b) => {
        return a.priority.localeCompare(b.priority);
      });

    default:
      return tickets;
  }
};
