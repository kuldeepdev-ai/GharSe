import { Link } from 'react-router-dom';
import { ChefHat, CalendarClock, Truck, CheckCircle2, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container animate-fade-in-up">
          <span className="badge badge-green mb-4">Pune's #1 Meal Subscriptions</span>
          <h1 className="hero-title">Daily Homely Meals,<br/>Delivered.</h1>
          <p className="hero-subtitle">
            Simple, hygienic, ghar-jaisa food delivered straight to your doorstep. Perfect for students and professionals.
          </p>
          <div className="hero-actions">
            <a href="#plans" className="btn btn-primary btn-lg">View Plans</a>
            <Link to="/checkout" className="btn btn-secondary btn-lg">Subscribe Now</Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works section-padding bg-cream">
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
              <h3 className="step-title">2. Select meal & timing</h3>
              <p className="step-desc">Choose between lunch or dinner, and select your preferred delivery time slot.</p>
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
      <section id="plans" className="plans section-padding">
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2 className="section-title">Subscription Plans</h2>
            <p className="section-subtitle">Flexible plans designed for everyone</p>
          </div>
          <div className="plans-grid">
            {/* Trial Plan */}
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
                <li><CheckCircle2 size={16} className="feature-icon" /> Lunch or Dinner</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Free Delivery</li>
              </ul>
              <Link to="/checkout" className="btn btn-outline full-width mt-4">Select Plan</Link>
            </div>

            {/* Daily Plan */}
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
                <li><CheckCircle2 size={16} className="feature-icon" /> Lunch or Dinner</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Free Delivery</li>
              </ul>
              <Link to="/checkout" className="btn btn-outline full-width mt-4">Select Plan</Link>
            </div>

            {/* Weekly Plan */}
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
                <li><CheckCircle2 size={16} className="feature-icon" /> Pause anytime</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Free Delivery</li>
              </ul>
              <Link to="/checkout" className="btn btn-outline full-width mt-4">Select Plan</Link>
            </div>

            {/* Monthly Plan */}
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
                <li><CheckCircle2 size={16} className="feature-icon" /> Skip/Pause easily</li>
                <li><CheckCircle2 size={16} className="feature-icon" /> Priority Delivery</li>
              </ul>
              <Link to="/checkout" className="btn btn-primary full-width mt-4">Select Plan</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu section-padding bg-cream">
        <div className="container menu-container">
          <div className="menu-content">
            <h2 className="section-title">What's in the Thali?</h2>
            <p className="section-subtitle">A balanced, nutritious meal that reminds you of home.</p>
            <ul className="menu-items mt-4">
              <li><CheckCircle2 size={20} className="menu-icon" /> <strong>4 Hot Chapatis</strong> - soft and lightly buttered</li>
              <li><CheckCircle2 size={20} className="menu-icon" /> <strong>Bowl of Dal</strong> - comforting tadka dal</li>
              <li><CheckCircle2 size={20} className="menu-icon" /> <strong>Jeera Rice</strong> - fragrant and light</li>
              <li><CheckCircle2 size={20} className="menu-icon" /> <strong>Dry Sabji</strong> - seasonal fresh vegetables</li>
              <li><CheckCircle2 size={20} className="menu-icon" /> <strong>Salad & Pickle</strong> - for that extra zing</li>
            </ul>
            <div className="menu-note mt-4">
              <p><em>* Menu changes daily to keep it fresh, healthy, and interesting!</em></p>
            </div>
          </div>
          <div className="menu-image-container">
            {/* Placeholder for real thali image, using a stylized div for now */}
            <div className="menu-image-placeholder">
              <div className="plate">
                <div className="bowl bowl-1"></div>
                <div className="bowl bowl-2"></div>
                <div className="bowl bowl-3"></div>
                <div className="chapati-stack"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section-padding">
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2 className="section-title">Loved by our subscribers</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card card">
              <div className="stars mb-2">
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
              </div>
              <p className="testimonial-text">"The food literally tastes like what my mom makes. It's not oily or heavy like restaurant food. Perfect for everyday eating!"</p>
              <p className="testimonial-author mt-4"><strong>- Rahul D.</strong>, Software Engineer</p>
            </div>
            <div className="testimonial-card card">
              <div className="stars mb-2">
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
              </div>
              <p className="testimonial-text">"I love the flexibility. I can pause my subscription when I travel on weekends. The delivery is always on time."</p>
              <p className="testimonial-author mt-4"><strong>- Sneha K.</strong>, Student</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
