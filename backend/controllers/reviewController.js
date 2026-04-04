const Review = require('../models/Review');
const Booking = require('../models/Booking');

// @desc    Add a review
// @route   POST /api/reviews
// @access  Private
exports.addReview = async (req, res) => {
  try {
    const { rating, comment, serviceId } = req.body;

    // Optional check: Did user actually book anything?
    // Skip for demo purposes, but in enterprise we verify via Booking model
    const hasBooked = await Booking.findOne({ userId: req.user.id, status: 'completed' });
    if (!hasBooked) {
      return res.status(403).json({ success: false, message: 'You must complete at least one booking to leave a review.'});
    }

    const review = await Review.create({
      userId: req.user.id,
      serviceId: serviceId || null,
      rating,
      comment
    });

    res.status(201).json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('userId', 'name').sort({ createdAt: -1 });
    
    // Calculate stats
    const totalRating = reviews.reduce((acc, current) => acc + current.rating, 0);
    const averageRating = reviews.length > 0 ? (totalRating / reviews.length).toFixed(1) : 0;

    res.status(200).json({ 
      success: true, 
      count: reviews.length, 
      averageRating: parseFloat(averageRating),
      data: reviews 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete review
// @route   DELETE /api/reviews/:id
// @access  Private (Owner or Admin)
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ success: false, message: 'Review not found' });

    // Make sure user is review owner or an admin
    if (review.userId.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ success: false, message: 'Not authorized to delete this review' });
    }

    await review.deleteOne();
    res.status(200).json({ success: true, message: 'Review removed' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
