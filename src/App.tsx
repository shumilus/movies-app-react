import React from 'react';

import './App.scss';
import Main from './components/Main';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/search'/>} />
        <Route path='/search' element={<Main/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
