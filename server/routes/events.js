import express from 'express'
import { getAllEvents, getEventById } from '../controllers/events.js'


const router = express.Router()

// define routes to get events and locations
router.get('/events', getAllEvents)
router.get('/events/:id', getEventById)



export default router