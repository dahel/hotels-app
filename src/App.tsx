import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from 'components/errorFallback/ErrorFallback';

const HotelsPage = React.lazy(() => import('./pages/hotels/Hotels'));

function App() {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <React.Suspense fallback={<div>LOADING...</div>}>
            <HotelsPage />
          </React.Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
