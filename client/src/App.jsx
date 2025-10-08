import React from "react";
import { Link, useRoutes } from "react-router-dom";
import Locations from "./pages/Locations";
import LocationEvents from "./pages/LocationEvents";
import AllEvents from "./pages/AllEvents";

const App = () => {
  const element = useRoutes([
    { path: "/", element: <Locations /> },
    { path: "/locations/:id", element: <LocationEvents /> },
    { path: "/events", element: <AllEvents /> },
  ]);

  return (
    <div className="app">
      <div className="page-bg" aria-hidden />
      <header className="main-header container">
        <nav>
        <ul>
          <li><h1>TrailQuest</h1></li>
        </ul>
        <ul>
          <div className="button">
          <li><Link to="/" role="button">Home</Link></li>
          <li><Link to="/events" role="button">All Events</Link></li>
          </div>
       </ul>
        </nav>
      </header>
      <main className="container">{element}</main>
    </div>
  );
};

export default App;
