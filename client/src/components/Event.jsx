import React, { useEffect, useState } from "react";
import EventsAPI from "../services/EventsAPI";
import "../css/Event.css";
import Countdown from "./Countdown";
import { toUtcIso } from "../utils/time";



const Event = (props) => {
  const [event, setEvent] = useState(props.event ?? null);
  const ISO = new Date(event.startsAt).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const startsAtRaw = event?.startsAt ?? event?.starts_at ?? null;

    const isoUtc = toUtcIso(startsAtRaw);

  useEffect(() => {
    
    if (props.event) {
      setEvent(props.event);
      return;
    }
    if (!props.id) {
      setEvent(null);
      return;
    }
    (async () => {
      try {
        const eventData = await EventsAPI.getEventById(props.id);
        setEvent(eventData);
      } catch (error) {
        console.error("Failed to load event:", error);
        setEvent(null);
      }
    })();
  }, [props.event, props.id]);

  if (!event) {
    return (
      <article className="card">
        <header><h3>No event selected <i class="fa-utility-duo fa-semibold fa-face-frown"></i></h3></header>
      </article>
    );
  }

  return (
    <div className="grid">
    <article className="card">
      <header>
        <h3>{event.title}</h3>
      </header>
      <p>
        <i class="fa-utility-duo fa-semibold fa-calendar"></i>
        <br/>
        {ISO}
      </p>
      {isoUtc && (
        <Countdown
            isoUtc={isoUtc}
            doneText="Past event"
        />
    )}
      <p>{event.price ? <><i class="fa-utility-duo fa-semibold fa-circle-dollar"></i>{event.price}</> : null}
      </p>
      <p>{event.description}</p>
      {Array.isArray(event.tags) && event.tags.length > 0 && (
        <small>{event.tags.join(", ")}</small>
      )}
    </article>
    </div>
  );
};

export default Event;
