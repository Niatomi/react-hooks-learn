import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import UseStatePage from './pages/UseStatePage';
import Navbar from './components/Navbar'
import UseEffectPage from './pages/UseEffectPage';
import UseRefPage from './pages/UseRefPage';
import UseMemoPage from './pages/UseMemoPage';
import UseCallbackPage from './pages/UseCallbackPage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<UseCallbackPage/>} />
            <Route path='/useMemo' element={<UseMemoPage/>} />
            <Route path='/useEffect' element={<UseEffectPage/>} />
            <Route path='/useRef' element={<UseRefPage/>} />
            <Route path='/useState' element={<UseStatePage/>} />
            <Route path='/useCallback' element={<UseCallbackPage/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
