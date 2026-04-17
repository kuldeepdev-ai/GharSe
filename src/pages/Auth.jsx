import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Phone } from 'lucide-react';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="container auth-container animate-fade-in-up">
        
        {/* Service Update Banner */}
        <div className="text-center mb-6">
          <span className="badge badge-outline">Currently Dinner Delivery Only</span>
        </div>

        <div className="auth-card card">
          <div className="auth-header text-center">
            <h1 className="auth-title">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
            <p className="auth-subtitle">
              {isLogin ? 'Enter your details to access your account' : 'Join us to get homely meals delivered daily'}
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <div className="input-with-icon">
                    <User size={20} className="input-icon" />
                    <input type="text" id="name" placeholder="e.g. Aditi Sharma" required={!isLogin} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="input-with-icon">
                    <Phone size={20} className="input-icon" />
                    <input type="tel" id="phone" placeholder="+91 90000 00000" required={!isLogin} />
                  </div>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <Mail size={20} className="input-icon" />
                <input type="email" id="email" placeholder="you@example.com" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <Lock size={20} className="input-icon" />
                <input type="password" id="password" placeholder="••••••••" required />
              </div>
            </div>

            {isLogin && (
              <div className="auth-forgot-password">
                <a href="#">Forgot password?</a>
              </div>
            )}

            <button type="submit" className="btn btn-primary full-width auth-submit">
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </form>

          <div className="auth-toggle text-center mt-8">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button type="button" className="toggle-btn" onClick={toggleAuthMode}>
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
