import { pool } from "../config/database.js";

export const getAllEvents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getEventById = async (req, res) => {
    const { id } = req.params;
    try {
        console.debug('GET /api/events/:id requested id=', id);
        const result = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
        console.debug('DB returned rows:', result.rows.length);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};