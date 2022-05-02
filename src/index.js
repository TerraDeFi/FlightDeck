import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './dashboard/Dashboard.js';
import Borrow from './borrow/Borrow.js';
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <ul className="d-flex justify-content-between">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/borrow">Anchor</Link>
          </li>
          <li>
            <Link to="/cyber">Cyber Deck</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/borrow" element={<Borrow />} />
          {/* <Route path="/cyber"><Cyber /></Route> */}
        </Routes>
      </div>

    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
