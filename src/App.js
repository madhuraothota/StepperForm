import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReferalContacts from './ReferalContacts';





class App extends Component {


  render() {

    return (
      <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ReferalContacts' element={<ReferalContacts />} />
        </Routes>
      </Router>
      </div>


    )

  }


}

export default App;