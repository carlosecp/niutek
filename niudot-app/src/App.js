import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from './components/layout/Sidebar'
import Page from './components/pages/Page'

function App() {
  return (
    <Router>
      <Sidebar />
      <Page />
    </Router>
  );
}

export default App;
