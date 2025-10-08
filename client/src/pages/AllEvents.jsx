import React, { useEffect, useState } from "react";
import Event from "../components/Event";
import EventsAPI from "../services/EventsAPI";

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await EventsAPI.getAllEvents();
        setEvents(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load events:", err);
      }
    })();
  }, []);

  return (
    <section className="container-fluid">
      <header className="location-events-header">
        <h2><i class="fa-utility-duo fa-semibold fa-tree"></i>All Events</h2>
      </header>
      <div className="card-grid">
        {events.map((ev) => (
          <Event key={ev.id} event={ev} />
        ))}
      </div>
    </section>
  );
};

export default AllEvents;
