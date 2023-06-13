const {
  Router
} = require('express')
const router = Router()
const {
  getByIdTravel,
  getAllTravels,
  addTravelBook
} = require('../controllers/travelControllers')

// get All
router.get('/', getAllTravels)
// post new
router.post('/add', addTravelBook)
// GET ById
router.get('/:id', getByIdTravel)

module.exports = router