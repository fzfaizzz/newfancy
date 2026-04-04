const express = require('express');
const Booking = require('../models/Booking');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// @desc    Get Admin Dashboard Stats
// @route   GET /api/admin/dashboard
// @access  Private/Admin
router.get('/dashboard', protect, authorize('admin'), async (req, res) => {
  try {
    // Analytics
    const totalBookings = await Booking.countDocuments();
    const activeCustomers = await User.countDocuments({ role: 'user' });
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todaysBookings = await Booking.countDocuments({
      date: { $gte: today }
    });

    const recentBookings = await Booking.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('userId', 'name email')
      .populate('serviceId', 'name');

    res.status(200).json({
      success: true,
      data: {
        stats: {
          totalBookings,
          activeCustomers,
          todaysBookings,
          revenue: '₹' + (totalBookings * 200) // Mock calculation
        },
        recentBookings
      }
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
