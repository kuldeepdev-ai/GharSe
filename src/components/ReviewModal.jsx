import { useState } from 'react';
import { X, Star } from 'lucide-react';
import './ReviewModal.css';

const ReviewModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content card animate-fade-in-up" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        
        {submitted ? (
          <div className="text-center py-8">
            <h3 className="modal-title mb-2">Thank You!</h3>
            <p className="text-gray">Your review has been submitted successfully.</p>
          </div>
        ) : (
          <>
            <h3 className="modal-title mb-6">Write a Review</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label>Your Name</label>
                <input type="text" className="standard-input" placeholder="e.g., Sneha K." required />
              </div>
              <div className="form-group mb-4">
                <label>Plan Selected</label>
                <select className="standard-input" required>
                  <option value="">Select a plan</option>
                  <option value="trial">Trial Plan</option>
                  <option value="daily">Daily Plan</option>
                  <option value="weekly">Weekly Plan</option>
                  <option value="monthly">Monthly Plan</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label>Rating</label>
                <div className="rating-select">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      type="button" 
                      key={star} 
                      className={`star-btn ${rating >= star ? 'active' : ''}`}
                      onClick={() => setRating(star)}
                    >
                      <Star size={24} fill={rating >= star ? 'var(--color-primary-brown)' : 'transparent'} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group mb-6">
                <label>Your Review</label>
                <textarea className="standard-input" rows="4" placeholder="Tell us what you liked..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary full-width">Submit Review</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewModal;
