// Backend URL. Defaults to the production backend on Vercel (localhost when running `npm start`);
// set REACT_APP_API_URL in Vercel or a local .env file to point somewhere else.
const DEFAULT_API_URL = process.env.NODE_ENV === 'production'
  ? 'https://backendmentalhealth.vercel.app'
  : 'http://localhost:4000';

export const API_URL = (process.env.REACT_APP_API_URL || DEFAULT_API_URL).replace(/\/$/, '');
