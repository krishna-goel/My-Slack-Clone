// rfce short cut for full code  
import React from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar'

function App() {
  return (
    <div>
      {/* <h3>hello :rocket</h3> */}
      <Header />
      {/* Header */}
      <div className="app__body">
        <Sidebar/>
        {/* Slider */}
        {/* React-Router -> Chat Screen switch between channels without refreshing */}
      </div>
    </div>
  );
}

export default App;
