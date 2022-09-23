import { Routes, Route } from "react-router-dom";
import { Home, Event, CreateEvent } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="event" element={<Event />} />
      <Route path="create-event" element={<CreateEvent />} />
    </Routes>
  );
}

export default App;
