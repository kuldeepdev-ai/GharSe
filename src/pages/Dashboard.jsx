import { useState } from 'react';
import { Settings, Calendar, Clock, PauseCircle, PlayCircle, Utensils, Crown } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => setIsPaused(!isPaused);

  return (
    <div className="dashboard-page bg-pink-light section-padding">
      <div className="container dashboard-container">
        
        {/* Service Update Banner */}
        <div className="text-center mb-6">
          <span className="badge badge-outline">Currently Dinner Delivery Only</span>
        </div>

        {/* Welcome Header */}
        <header className="dashboard-header mb-8 animate-fade-in-up">
          <div>
            <h1 className="dashboard-title">Welcome back</h1>
            <p className="dashboard-subtitle">Manage your subscription and meals</p>
          </div>
          <button className="btn btn-outline"><Settings size={18} className="mr-2" /> Settings</button>
        </header>

        <div className="dashboard-grid animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          {/* Main Content (Left Column) */}
          <div className="dashboard-main">
            
            {/* Choose Meal Source */}
            <section className="dashboard-section">
              <h2 className="section-title-sm mb-4">Choose Meal Source</h2>
              
              {/* Mess / Khanaval */}
              <div className="source-category mb-6">
                <h3 className="category-title"><Utensils size={18} /> Mess / Khanaval</h3>
                <div className="provider-grid">
                  <div className="provider-card card active">
                    <div className="provider-header">
                      <h4>Shree Swami Samarth Mess</h4>
                    </div>
                    <p className="provider-desc">Authentic Maharashtrian Thali</p>
                    <button className="btn btn-primary btn-sm mt-2">Selected</button>
                  </div>
                  <div className="provider-card card">
                    <div className="provider-header">
                      <h4>Annapurna Dining</h4>
                    </div>
                    <p className="provider-desc">North Indian & Punjabi Mix</p>
                    <button className="btn btn-outline btn-sm mt-2">Select</button>
                  </div>
                </div>
              </div>

              {/* Moms Special */}
              <div className="source-category premium-category mt-8">
                <div className="premium-header">
                  <h3 className="category-title text-brown"><Crown size={18} /> Mom's Special</h3>
                  <span className="badge badge-brown">Coming Soon</span>
                </div>
                <p className="premium-desc mb-4">Home-cooked meals prepared with love by homemakers in your area.</p>
                <div className="provider-grid disabled-grid">
                  <div className="provider-card card premium-card">
                    <div className="provider-header">
                      <h4>Aunty Anita's Kitchen</h4>
                    </div>
                    <p className="provider-desc">Specializing in healthy, less-oil homemade food.</p>
                  </div>
                  <div className="provider-card card premium-card">
                    <div className="provider-header">
                      <h4>Sneha's Rasoi</h4>
                    </div>
                    <p className="provider-desc">Pure veg, satvik home food.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar (Right Column) */}
          <div className="dashboard-sidebar">
            
            {/* Active Subscription */}
            <div className="card subscription-card mb-6">
              <div className="subs-header">
                <h3>Active Plan</h3>
                <span className={`status-dot ${isPaused ? 'paused' : 'active'}`}></span>
              </div>
              <div className="subs-details mt-4">
                <div className="subs-plan-name text-brown text-xl font-bold">Monthly Plan</div>
                <div className="subs-meta mt-2">
                  <div className="meta-item"><Calendar size={16} /> Status: Active</div>
                  <div className="meta-item"><Clock size={16} /> Renews: Next Month</div>
                </div>
              </div>
            </div>

            {/* Order Controls */}
            <div className="card controls-card">
              <h3 className="mb-4">Quick Controls</h3>
              
              <div className="control-group mb-6">
                <label className="control-label">Meal Preference</label>
                <div className="meal-toggle mt-2">
                  <button className="toggle-btn active" disabled>
                    Dinner (Default)
                  </button>
                </div>
                <p className="control-hint mt-2 text-center">We currently deliver dinner only.</p>
              </div>

              <div className="control-actions">
                <button 
                  className={`btn full-width mb-3 ${isPaused ? 'btn-primary' : 'btn-outline'}`}
                  onClick={togglePause}
                >
                  {isPaused ? <><PlayCircle size={18} className="mr-2" /> Resume Subscription</> : <><PauseCircle size={18} className="mr-2" /> Pause Subscription</>}
                </button>
                <button className="btn btn-outline full-width">Change Plan</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
