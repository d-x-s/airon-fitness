const express = require('express');
const {
  registerUser, loginUser, getMe, deleteMe,
} = require('../controllers/userInfoController');

const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

/**
 * @desc registers a new user, returns authentication token
 * @access Public
 * @route POST /userInfo
 * @request
 *  body:
 *    {
 *      "password": string,
 *      "email": string,
 *    }
 *  params: n/a
 *  query params: n/a
 * @response
 *    {
 *      "id": string,
 *      "email": string,
 *      "token": string"
 *    }
 */
router.post('/', registerUser);

/**
 * @desc returns token for user authentication
 * @access Public
 * @route POST /userInfo/login
 * @request
 *  body:
 *    {
 *      "email": string,
 *      "password": string,
 *    }
 *  params: n/a
 *  query params: n/a
 * @response
 *    {
 *      "id": string,
 *      "email": string,
 *      "token": string"
 *    }
 */
router.post('/login', loginUser);

/**
 * @desc gets userInfo for user if authenticated
 * @access Private
 * @route GET /userInfo/me
 * @request
 *  body: n/a
 *  params: n/a
 *  query params: n/a
 *  Auth: Bearer token
 * @response
 *    {
 *      "id": string,
 *      "email": string,
 *    }
 */
router.get('/me', protect, getMe);

/**
 * @desc delete userInfo, userProfile, mealSchedule, workoutSchedule for user if authenticated
 * @access Private
 * @route Delete /userInfo/me
 * @request
 *  body: n/a
 *  params: n/a
 *  query params: n/a
 *  Auth: Bearer token
 * @response
 *    {
 *      "id": string,
 *      "email": string,
 *    }
 */
router.delete('/me', protect, deleteMe);

module.exports = router;
