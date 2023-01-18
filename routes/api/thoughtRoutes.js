const router = require('express').Router();
const {getAllThought, getThoughtById, createThought, updateThought, deleteThought, createReaction, deleteReaction} = require('../../controllers/thoughtController');
//  all of the routes for thoughts and reactions
router.route('/').get(getAllThought).post(createThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;