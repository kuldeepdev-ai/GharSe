import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, CalendarClock, Truck, CheckCircle2, Star, MessageSquare } from 'lucide-react';
import ReviewModal from '../components/ReviewModal';
import './Home.css';

const Home = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  return (
    <div className="home-page">
      {/* Service Update Banner */}
      <div className="service-banner text-center">
        <span className="badge">Currently Dinner Delivery Only</span>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container animate-fade-in-up">
          <h1 className="hero-title">Daily Homely Meals,<br/>Delivered.</h1>
          <p className="hero-subtitle">
            Simple, hygienic, ghar-jaisa food delivered straight to your doorstep. Experience the comfort of home.
          </p>
          <div className="hero-actions">
            <a href="#plans" className="btn btn-primary btn-lg">View Plans</a>
            <Link to="/checkout" className="btn btn-secondary btn-lg">Subscribe Now</Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works section-padding">
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Get your daily meals sorted in 3 simple steps</p>
          </div>
          <div className="steps-grid">
            <div className="step-card card">
              <div className="step-icon-wrapper">
                <ChefHat size={32} className="step-icon" />
              </div>
              <h3 className="step-title">1. Choose your plan</h3>
              <p className="step-desc">Select from trial, daily, weekly, or monthly subscriptions based on your needs.</p>
            </div>
            <div className="step-card card">
              <div className="step-icon-wrapper">
                <CalendarClock size={32} className="step-icon" />
              </div>
              <h3 className="step-title">2. Select timing</h3>
              <p className="step-desc">Choose your preferred delivery time slot for dinner.</p>
            </div>
            <div className="step-card card">
              <div className="step-icon-wrapper">
                <Truck size={32} className="step-icon" />
              </div>
              <h3 className="step-title">3. Get daily delivery</h3>
              <p className="step-desc">Enjoy fresh, hot, home-style food delivered to your door every single day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="plans section-padding bg-pink-light">
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2 className="section-title">Subscription Plans</h2>
            <p className="section-subtitle">Flexible plans designed for everyone</p>
          </div>
          <div className="plans-grid">
            {/* Trial Plan */}
            <div className="plan-wrapper">
              <div className="plan-card card">
                <h3 className="plan-name">Trial</h3>
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">109</span>
                  <span className="duration">/ meal</span>
                </div>
                <p className="plan-desc">Perfect to taste the quality before committing.</p>
                <ul className="plan-features">
                  <li><CheckCircle2 size={16} className="feature-icon" /> 1 Meal delivered</li>
                  <li><CheckCircle2 size={16} className="feature-icon" /> Dinner Only</li>
                  <li><CheckCircle2 size={16} className="feature-icon" /> Free Delivery</li>
                </ul>
                <Link to="/checkout" className="btn btn-outline full-width mt-4">Select Plan</Link>
              </div>
              <div className="plan-review text-center mt-4">
                <div className="stars"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                <p>"Tasted exactly like home."</p>
                <span>- IT Professional, Pune</span>
              </div>
            </div>

            {/* Daily Plan */}
            <div className="plan-wrapper">
              <div className="plan-card card">
                <h3 className="plan-name">Daily</h3>
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">129</span>
                  <span className="duration">/ day</span>
                </div>
                <p className="plan-desc">Great for those who want flexibility day-by-day.</p>
                <ul className="plan-features">
                  <li><CheckCircle2 size={16} className="feature-icon" /> Daily renewal</li>
                  <li><CheckCircle2 size={16} className="feature-icon" /> Dinner Only</li>
                  <li><CheckCircle2 size={16} className="feature-icon" /> Free Delivery</li>
                </ul>
                <Link to="/checkout" className="btn btn-outline full-width mt-4">Select Plan</Link>
              </div>
              <div className="plan-review text-center mt-4">
                <div className="stars"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                <p>"Perfect for my busy schedule."</p>
                <span>- Designer</span>
              </div>
            </div>

            {/* Weekly Plan */}
            <div className="plan-wrapper">
              <div className="plan-card card">
                <h3 className="plan-name">Weekly</h3>
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">899</span>
                  <span className="duration">/ week</span>
                </div>
                <p className="plan-desc">A convenient week-long hassle-free experience.</p>
                <ul className="plan-features">
                  <li><CheckCircle2 size={16} className="feature-icon" /> 7 Meals included</li>
                  <li><CheckCircle2 size={16} className="feature-icon" /> Dinner Only</li>
                  <li><CheckCircle2 size={16} className="feature-icon" /> Free Delivery</li>
                </ul>
                <Link to="/checkout" className="btn btn-outline full-width mt-4">Select Plan</Link>
              </div>
              <div className="plan-review text-center mt-4">
                <div className="stars"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                <p>"Consistently good food all week."</p>
                <span>- Student, FC Road</span>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className="plan-wrapper">
              <div className="plan-card card plan-highlighted">
                <div className="plan-badge">Best Value</div>
                <h3 className="plan-name">Monthly</h3>
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">3299</span>
                  <span className="duration">/ month</span>
                </div>
                <p className="plan-desc">The ultimate hands-off, economical meal solution.</p>
                <ul className="plan-features">
                  <li><CheckCircle2 size={16} className="feature-icon" /> 30 Meals included</li>
                  <li><CheckCircle2 size={16} className="feature-icon" /> Priority Delivery</li>
                  <li className="highlight-feature">Missed meals? Get up to 2 meals adjusted in your next monthly plan.</li>
                </ul>
                <Link to="/checkout" className="btn btn-primary full-width mt-4">Select Plan</Link>
              </div>
              <div className="plan-review text-center mt-4">
                <div className="stars"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                <p>"A lifesaver for working late!"</p>
                <span>- Banker, Kothrud</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu section-padding">
        <div className="container menu-container">
          <div className="menu-image-container animate-fade-in-up">
            <img src="/thali.png" alt="Premium Indian Thali Top View" className="thali-real-image" />
          </div>
          <div className="menu-content animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h2 className="section-title">What's in your Thali?</h2>
            <p className="section-subtitle mb-6">A balanced, nutritious meal that reminds you of home. Prepared fresh every evening.</p>
            <div className="thali-list">
              <div className="thali-item card">
                <span className="thali-icon">🍞</span>
                <strong>3 Warm Chapatis</strong>
                <span className="text-gray ml-2">- Soft and lightly buttered</span>
              </div>
              <div className="thali-item card">
                <span className="thali-icon">🥣</span>
                <strong>Dal</strong>
                <span className="text-gray ml-2">- Comforting tadka dal</span>
              </div>
              <div className="thali-item card">
                <span className="thali-icon">🍚</span>
                <strong>Rice</strong>
                <span className="text-gray ml-2">- Fragrant jeera rice</span>
              </div>
              <div className="thali-item card">
                <span className="thali-icon">🍲</span>
                <strong>2 Sabjis</strong>
                <span className="text-gray ml-2">- Seasonal fresh vegetables</span>
              </div>
              <div className="thali-item card">
                <span className="thali-icon">🥗</span>
                <strong>Salad</strong>
                <span className="text-gray ml-2">- For that extra zing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Review Button */}
      <button 
        className="floating-review-btn btn btn-primary"
        onClick={() => setIsReviewModalOpen(true)}
      >
        <MessageSquare size={20} className="mr-2" /> Write a Review
      </button>

      <ReviewModal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} />
    </div>
  );
};

export default Home;
