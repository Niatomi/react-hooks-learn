import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import UseStatePage from './pages/UseStatePage';
import Navbar from './components/Navbar'
import UseEffectPage from './pages/UseEffectPage';
import UseRefPage from './pages/UseRefPage';
import UseMemoPage from './pages/UseMemoPage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<UseMemoPage/>}></Route>
            <Route path='/useMemo' element={<UseMemoPage/>}></Route>
            <Route path='/useEffect' element={<UseEffectPage/>}></Route>
            <Route path='/useRef' element={<UseRefPage/>}></Route>
            <Route path='/useState' element={<UseStatePage/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
