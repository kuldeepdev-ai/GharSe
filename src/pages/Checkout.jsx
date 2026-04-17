import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, CreditCard, CheckCircle2 } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mealPreference, setMealPreference] = useState('Dinner');

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate Razorpay payment flow
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Redirect to dashboard after success
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="checkout-page bg-cream flex-center">
        <div className="success-card card text-center animate-fade-in-up">
          <div className="success-icon-wrapper mb-4">
            <CheckCircle2 size={64} className="text-green" />
          </div>
          <h2 className="success-title mb-2">Payment Successful!</h2>
          <p className="success-desc mb-6">Your GharSee subscription is now active.</p>
          <p className="redirect-text">Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page bg-cream section-padding">
      <div className="container checkout-container">
        
        <div className="checkout-header mb-8 text-center animate-fade-in-up">
          <h1 className="dashboard-title">Complete Your Subscription</h1>
          <p className="dashboard-subtitle">Almost there! Just a few details before you enjoy your homely meals.</p>
        </div>

        <div className="checkout-grid animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          
          {/* Form Section */}
          <div className="checkout-form-section card">
            <h2 className="section-title-sm mb-6">Delivery Details</h2>
            <form id="checkout-form" onSubmit={handlePayment}>
              
              <div className="form-row">
                <div className="form-group half-width">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="standard-input" placeholder="Rohan Sharma" required />
                </div>
                <div className="form-group half-width">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className="standard-input" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Complete Delivery Address</label>
                <textarea id="address" className="standard-input" rows="3" placeholder="Flat No, Building Name, Street, Landmark..." required></textarea>
              </div>

              <div className="form-row mt-6">
                <div className="form-group half-width">
                  <label className="control-label mb-2">Meal Preference</label>
                  <div className="meal-toggle">
                    <button 
                      type="button"
                      className={`toggle-btn ${mealPreference === 'Lunch' ? 'active' : ''}`}
                      onClick={() => setMealPreference('Lunch')}
                    >
                      Lunch
                    </button>
                    <button 
                      type="button"
                      className={`toggle-btn ${mealPreference === 'Dinner' ? 'active' : ''}`}
                      onClick={() => setMealPreference('Dinner')}
                    >
                      Dinner
                    </button>
                  </div>
                </div>
                <div className="form-group half-width">
                  <label htmlFor="startDate">Start Date</label>
                  <input type="date" id="startDate" className="standard-input" required />
                </div>
              </div>

            </form>
          </div>

          {/* Summary Section */}
          <div className="checkout-summary-section">
            <div className="card summary-card mb-6">
              <h2 className="section-title-sm mb-4">Order Summary</h2>
              
              <div className="summary-item mb-2">
                <span>Monthly Plan</span>
                <span className="font-bold">₹3299</span>
              </div>
              <div className="summary-item text-gray text-sm mb-4">
                <span>30 Meals • {mealPreference}</span>
              </div>
              
              <div className="summary-item mb-2">
                <span>Delivery Charges</span>
                <span className="text-green font-bold">FREE</span>
              </div>
              
              <div className="summary-item mb-4">
                <span>GST (5%)</span>
                <span>₹165</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total mt-4 mb-6">
                <span className="total-label">Total to Pay</span>
                <span className="total-amount">₹3464</span>
              </div>

              <button 
                type="submit" 
                form="checkout-form"
                className={`btn btn-primary full-width pay-btn ${isProcessing ? 'processing' : ''}`}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing Securely...' : <><ShieldCheck size={18} className="mr-2" /> Pay via Razorpay</>}
              </button>
              
              <div className="secure-badge mt-4 text-center">
                <CreditCard size={14} className="mr-1" /> 100% Secure Payment
              </div>
            </div>
            
            <div className="guarantee-box text-center">
              <p className="text-sm text-gray">Cancel anytime before the cutoff. Unused meals are refunded automatically.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
