import './App.css';

// Socket imports
import { io } from "socket.io-client";
const socket = io("http://localhost:8080");


socket.on("connect", () => {
  console.log(socket.id);
});

function App() {
  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
