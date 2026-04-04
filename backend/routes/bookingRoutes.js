const express = require('express');
const { createBooking, getMyBookings, getBookings, updateBookingStatus } = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// User routes
router.post('/', protect, createBooking);
router.get('/my-bookings', protect, getMyBookings);

// Admin routes
router.get('/', protect, authorize('admin', 'barber'), getBookings);
router.put('/:id/status', protect, authorize('admin', 'barber'), updateBookingStatus);

module.exports = router;
