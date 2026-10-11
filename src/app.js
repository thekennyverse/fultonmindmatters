import React, { useState } from 'react';
import Paths from './components/paths.js';
import Auth from './components/auth.js';

const STORAGE_KEY = 'fmmUser';

// Remember who is signed in so a page refresh doesn't log them out.
function loadUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (err) {
    return null;
  }
}

function saveUser(user) {
  try {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    // Storage can be unavailable (e.g. private browsing); the session just won't persist.
  }
}

export default function App() {
  const [user, setUser] = useState(loadUser);

  const updateUser = (newUser) => {
    saveUser(newUser);
    setUser(newUser);
  };

  return (
    <div className="headContainer">
      {user
        ? <Paths user={user} onLogout={() => updateUser(null)} />
        : <Auth
            onLogin={(username) => updateUser({ username })}
            onGuest={() => updateUser({ guest: true })}
          />}
    </div>
  );
}
