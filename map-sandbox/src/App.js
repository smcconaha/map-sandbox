import React, { useEffect, useState } from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './App.css';
import MapContainer from './Components/MapContainer';

function App() {
  return (
    <div className="container-fluid footer">
    <div className="row">
      <div className="col-3">
        <p> User Location </p>
      </div>
      <div className="col-3"></div>
      <div className="col-6">
        <MapContainer />
      </div>
    </div>
  </div>
  );
}

export default App;