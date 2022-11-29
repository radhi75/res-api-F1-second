import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Addperson from "./Components/Addperson";
import PersonList from "./Components/PersonList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<PersonList />} />
        <Route path="/addperson" element={<Addperson />} />
      </Routes>
    </div>
  );
}

export default App;
