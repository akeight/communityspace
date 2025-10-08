import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Event from "../components/Event";
import EventsAPI from "../services/EventsAPI";
import LocationsAPI from "../services/LocationsAPI";
import "../css/LocationEvents.css";

const LocationEvents = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const locations = await LocationsAPI.getAllLocations();
        const found = Array.isArray(locations)
          ? locations.find((l) => String(l.id) === String(id))
          : null;
        setLocation(found || null);

        const allEvents = await EventsAPI.getAllEvents();
        const filtered = Array.isArray(allEvents)
          ? allEvents.filter((e) => String(e.locationId) === String(id))
          : [];
        setEvents(filtered);
      } catch (err) {
        console.error("Error loading location/events:", err);
      }
    })();
  }, [id]);

  return (
    <section className="container-fluid">
       <header className="location-events-header">
        <div className="location-info">
          <h2><i class="fa-utility-duo fa-semibold fa-tree"></i> {location?.name ?? "Unknown location"}</h2>
          {location && (
            <small style={{ color: "#fcfcfcff", marginTop: "0.5rem" }}>
              Latitude: {location.lat}, Longitude: {location.lng}
            </small>
          )}
          {location && (
            <h5 style={{ color: "#fcfcfcff", marginTop: "0.5rem" }}>  
              {location?.description}
            </h5>
          )}
        </div>
      </header>

      <main className="grid">
        {events.length > 0 ? (
          events.map((ev) => <Event key={ev.id} event={ev} />)
        ) : (
          <hgroup>
            <h2>
              <i class="fa-utility-duo fa-semibold fa-calendar"></i>
            </h2>
            <h3>No events scheduled at this location yet!</h3>
          </hgroup>
        )}
      </main>
    </section>
  );
};

export default LocationEvents;
