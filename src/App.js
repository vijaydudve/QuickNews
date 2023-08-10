import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
          <Route exact path="/" element={<News key="General" pagesize={15} country="in" category="General" />} ></Route> 
            <Route exact path="/General" element={<News key="General" pagesize={15} country="in" category="General" />} ></Route> 
            <Route exact path="/Entertainment" element={<News key="Entertainment" pagesize={15} country="in" category="Entertainment" />} ></Route> 
            <Route exact path="/Business" element={<News key="Business" pagesize={15} country="in" category="Business" />} ></Route> 
            <Route exact path="/Health" element={<News key="Health" pagesize={15} country="in" category="Health" />} ></Route> 
            <Route exact path="/Science" element={<News key="Science" pagesize={15} country="in" category="Science" />} ></Route> 
            <Route exact path="/Sports" element={<News key="Sports" pagesize={15} country="in" category="Sports" />} ></Route>
            <Route exact path="/Technology" element={<News key="Technology" pagesize={15} country="in" category="Technology" />} ></Route>  
          </Routes>
        </Router>
      </div>
    )
  }
}

