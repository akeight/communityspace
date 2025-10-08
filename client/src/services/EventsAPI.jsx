const getAllEvents = async () => {
    try {
        const response = await fetch('/api/events');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // map array items to camelCase
        return Array.isArray(data)
            ? data.map(d => ({
                id: d.id,
                title: d.title,
                startsAt: d.starts_at ?? d.startsAt,
                endsAt: d.ends_at ?? d.endsAt,
                description: d.description,
                img: d.img ?? d.image ?? '',
                tags: d.tags ?? [],
                maxPartySize: d.max_party_size ?? d.maxPartySize ?? null,
                organizer: d.organizer,
                price: d.price,
                locationId: d.location_id ?? d.locationId
            }))
            : [];
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};
const getEventById = async (id) => {
    try {
    const encoded = encodeURIComponent(id);
    const response = await fetch(`/api/events/${encoded}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // map server (snake_case) fields to client-friendly camelCase
        if (!data) return null
        const mapped = {
            id: data.id,
            title: data.title,
            startsAt: data.starts_at ?? data.startsAt,
            endsAt: data.ends_at ?? data.endsAt,
            description: data.description,
            img: data.img ?? data.image ?? '',
            tags: data.tags ?? [],
            maxPartySize: data.max_party_size ?? data.maxPartySize ?? null,
            organizer: data.organizer,
            price: data.price,
            locationId: data.location_id ?? data.locationId
        }
        console.debug('EventsAPI.getEventById mapped:', mapped)
        return mapped;
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        throw error;
    }
};

export default { getAllEvents, getEventById };