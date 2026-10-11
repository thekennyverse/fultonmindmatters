import React, { useState } from 'react';
import './auth.css';
import { API_URL } from '../config';

const MIN_PASSWORD_LENGTH = 6;

export default function Auth({ onLogin, onGuest }) {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isSignup = mode === 'signup';

  const switchMode = (newMode) => {
    setMode(newMode);
    setError('');
    setFormData((previous) => ({ ...previous, password: '', confirmPassword: '' }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = formData.username.trim();
    const { password, confirmPassword } = formData;

    if (isSignup && password.length < MIN_PASSWORD_LENGTH) {
      setError(`Your password needs at least ${MIN_PASSWORD_LENGTH} characters.`);
      return;
    }
    if (isSignup && password !== confirmPassword) {
      setError("The passwords don't match. Please try again.");
      return;
    }

    setError('');
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/${isSignup ? 'register' : 'login'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.status >= 500) throw new Error(`Server error ${response.status}`);
      const data = await response.json();

      if (data.authenticated) {
        onLogin(username);
      } else if (isSignup) {
        setError(data.error || "We couldn't create your account. Please try again.");
      } else {
        setError("That username and password don't match. Check them and try again.");
      }
    } catch (err) {
      setError("We can't reach the server right now. Please try again in a moment, or continue as a guest.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Welcome to Fulton Mind Matters</h1>
        <p className="auth-subtitle">Fulton County's #1 source for mental health resources</p>

        <div className="auth-tabs" role="tablist">
          <button type="button" role="tab" aria-selected={!isSignup}
            className={!isSignup ? 'active' : ''} onClick={() => switchMode('login')}>
            Log in
          </button>
          <button type="button" role="tab" aria-selected={isSignup}
            className={isSignup ? 'active' : ''} onClick={() => switchMode('signup')}>
            Sign up
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            autoCapitalize="none"
            value={formData.username}
            onChange={handleChange}
            required
            autoFocus
          />

          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="button" className="show-password" onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {isSignup && <p className="hint">At least {MIN_PASSWORD_LENGTH} characters.</p>}

          {isSignup && (
            <>
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </>
          )}

          {error && <p className="auth-error" role="alert">{error}</p>}

          <button type="submit" className="primary"
            disabled={loading || !formData.username.trim() || !formData.password}>
            {loading
              ? (isSignup ? 'Creating your account…' : 'Logging in…')
              : (isSignup ? 'Create account' : 'Log in')}
          </button>
        </form>

        <p className="auth-switch">
          {isSignup ? 'Already have an account? ' : 'New here? '}
          <button type="button" className="link" onClick={() => switchMode(isSignup ? 'login' : 'signup')}>
            {isSignup ? 'Log in' : 'Create an account'}
          </button>
        </p>

        <button type="button" className="guest" onClick={onGuest}>
          Continue as guest
        </button>

        <p className="crisis">
          In crisis? Call or text <a href="tel:988">988</a> any time.
        </p>
      </div>
    </div>
  );
}
