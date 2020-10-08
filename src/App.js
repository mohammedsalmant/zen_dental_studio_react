import React from 'react';
import Home from'./component/Home'; 
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Route path="/" component={Home}/>      
      </Router>



    // <div className="App">
    //   <Home />
    // </div>
  );
}

export default App;
