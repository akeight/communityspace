import express from 'express'
import { getAllLocations } from '../controllers/locations.js'


const router = express.Router()

// define routes to get events and locations
router.get('/locations', getAllLocations)

export default router