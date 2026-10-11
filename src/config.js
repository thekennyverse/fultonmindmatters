// Backend URL. Set REACT_APP_API_URL in Vercel (or a local .env file) to your deployed backend.
export const API_URL = (process.env.REACT_APP_API_URL || 'http://localhost:4000').replace(/\/$/, '');
