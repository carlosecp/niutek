import React from 'react';
import './assets/styles/styles.css'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
