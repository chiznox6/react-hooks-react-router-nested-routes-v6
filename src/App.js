// src/App.js
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((r) => r.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Provide users as context to all nested routes */}
        <Outlet context={users} />
      </main>
    </>
  );
}

export default App;
