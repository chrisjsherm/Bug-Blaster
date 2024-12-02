import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>

        <TicketForm></TicketForm>
      </div>
    </div>
  );
}

export default App;
