const router = require('express').Router();
const { getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController');
// all the routes for users and friends
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;