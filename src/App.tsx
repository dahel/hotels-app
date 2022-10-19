import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const HotelsPage = React.lazy(() => import('./pages/hotels/Hotels'));

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={<div>LOADING...</div>}>
          <HotelsPage />
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
