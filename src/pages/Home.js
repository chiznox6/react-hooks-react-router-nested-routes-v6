// src/pages/Home.js
import { Outlet, useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar";

function Home() {
  const users = useOutletContext(); // 👈 Get users from App
  const userList = users.map((user) => (
    <UserCard key={user.id} user={user} />
  ));

  return (
    <div>
      <h1>Home!</h1>
      {/* Pass users down again to deeper nested components like UserProfile */}
      <Outlet context={users} />
      <section>{userList}</section>
    </div>
  );
}

export default Home;
