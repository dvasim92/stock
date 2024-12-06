import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Thanks from './components/Thanks';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/thanks' element={<Thanks />} />
    </Routes>
  )
};

export default App;