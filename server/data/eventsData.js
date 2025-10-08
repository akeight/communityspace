// NOTE: link each event to a location via locationId (matches locations.id)

const events = [
  // — Upcoming (relative to Oct 6, 2025) —
  {
    id: "e-herb-forage-101",
    title: "Herb-Forage Mini-Quest",
    locationId: "cedar-ridge",
    startsAt: "2025-10-11T09:00:00-07:00",
    endsAt: "2025-10-11T11:00:00-07:00",
    tags: ["foraging", "beginner", "family"],
    maxPartySize: 20,
    organizer: "TrailQuest Guild",
    price: 0,
    description: "Learn safe ID of cedar-ridge herbs; earn the Greenleaf badge.",
    img: ""
  },
  {
    id: "e-rope-skills",
    title: "Quarry Rope Skills Clinic",
    locationId: "old-quarry",
    startsAt: "2025-10-13T17:30:00-07:00",
    endsAt: "2025-10-13T19:30:00-07:00",
    tags: ["ropes", "clinic", "safety"],
    maxPartySize: 12,
    organizer: "Stonehands Collective",
    price: 15,
    description: "Harness basics, knots, and anchor checks on short faces.",
    img: ""
  },
  {
    id: "e-sunset-boss-summit",
    title: "Sunset “Boss” Summit",
    locationId: "cedar-ridge",
    startsAt: "2025-10-18T18:00:00-07:00",
    endsAt: "2025-10-18T20:30:00-07:00",
    tags: ["summit", "sunset", "moderate"],
    maxPartySize: 25,
    organizer: "TrailQuest Guild",
    price: 5,
    description: "Ridge-walk to a panoramic overlook; mini-challenge at the top.",
    img: ""
  },
  {
    id: "e-night-owl-loop",
    title: "Night-Owl Lantern Loop",
    locationId: "whispering-pines",
    startsAt: "2025-10-25T20:00:00-07:00",
    endsAt: "2025-10-25T22:00:00-07:00",
    tags: ["night-hike", "lanterns", "wildlife"],
    maxPartySize: 18,
    organizer: "Nocturne Guides",
    price: 10,
    description: "Quiet loop under the pines—owls, stars, and soft lantern glow.",
    img: ""
  },

  // — Past —
  {
    id: "e-torch-walk",
    title: "Cavern Torch Walk",
    locationId: "mossy-cavern",
    startsAt: "2025-09-27T19:00:00-07:00",
    endsAt: "2025-09-27T21:00:00-07:00",
    tags: ["cavern", "torches"],
    maxPartySize: 16,
    organizer: "Echo Cartographers",
    price: 8,
    description: "Guided torchlit stroll with echo-song call-and-response.",
    img: ""
  },
  {
    id: "e-cave-echo-mapping",
    title: "Cave Echo Mapping",
    locationId: "mossy-cavern",
    startsAt: "2025-09-20T10:00:00-07:00",
    endsAt: "2025-09-20T12:00:00-07:00",
    tags: ["cavern", "mapping", "acoustics"],
    maxPartySize: 10,
    organizer: "Echo Cartographers",
    price: 0,
    description: "Record echo delay to sketch the cavern’s hidden chambers.",
    img: ""
  },
  {
    id: "e-bird-dawn-watch",
    title: "Dawn Watch: Forest Birds",
    locationId: "whispering-pines",
    startsAt: "2025-09-14T05:30:00-07:00",
    endsAt: "2025-09-14T07:00:00-07:00",
    tags: ["wildlife", "binoculars", "quiet"],
    maxPartySize: 15,
    organizer: "Pinecone Naturalists",
    price: 0,
    description: "Early-light listening walk; bring thermos and patience.",
    img: ""
  },
  {
    id: "e-quarry-sunrise-rappel",
    title: "Sunrise Rappel Practice",
    locationId: "old-quarry",
    startsAt: "2025-09-22T06:00:00-07:00",
    endsAt: "2025-09-22T08:00:00-07:00",
    tags: ["ropes", "practice"],
    maxPartySize: 10,
    organizer: "Stonehands Collective",
    price: 10,
    description: "Short-face rappel reps with belay checks and feedback.",
    img: ""
  }
];

// Optional: quick lookup of event IDs per location
export const eventsByLocationId = events.reduce((acc, e) => {
  (acc[e.locationId] ??= []).push(e.id);
  return acc;
}, {});

export default events;
