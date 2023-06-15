const {
  Router
} = require('express')
const router = Router()
const {
  getByIdTravel,
  getAllTravels,
  addTravelBook,
  updateTravelBook,
  removeTravelBook
} = require('../controllers/travelControllers')

// get All
router.get('/', getAllTravels)
// post new
router.post('/add', addTravelBook)
// GET ById
router.get('/:id', getByIdTravel)
// PUT edit ById
router.put('/:id', updateTravelBook)
// DELETE remove ById
router.delete('/:id', removeTravelBook)

module.exports = router