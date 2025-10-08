import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationsAPI from "../services/LocationsAPI";
import "../css/Locations.css";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await LocationsAPI.getAllLocations();
        setLocations(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to load locations:", err);
      }
    })();
  }, []);

  return (
    <section className="container-fluid locations">
        <header className="location-events-header">
        <h2><i class="fa-utility-duo fa-semibold fa-tree"></i>Locations</h2>
        </header>
        <div className="card-grid">
            {locations.map((loc) => (
            <Link to={`/locations/${loc.id}`} key={loc.id}>
                <article className="">
                <header>
                        {loc.img && (
                            <img src={`../src/assets/${loc.img}`} alt={loc.name} style={{ objectFit: "cover", maxHeight: "300px", borderRadius: "8px", marginBottom: "1rem" }} />
                        )}
                        <br />
                        <h3>{loc.name}</h3>
              <small>
                Latitude: {loc.lat} 
              </small><br/>
              <small> 
                Longitude: {loc.lng}
              </small>
            </header>
            <h6>{loc.description}</h6>
            <small>Difficulty level: {loc.difficulty.toUpperCase()}</small>
          </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Locations;
