import App from "./App"; // Parent component with NavBar and <Outlet />
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,               // 🟢 Parent route component
    errorElement: <ErrorPage />,    // Common error handling
    children: [
      {
        path: "/",                  // Home component nested
        element: <Home />,
        children: [
          {
            path: "profile/:id",    // Deeply nested UserProfile
            element: <UserProfile />
          }
        ]
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
];

export default routes;
