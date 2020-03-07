import React from 'react';
import './App.css';
import './index.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { MDBContainer } from 'mdbreact';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MDBContainer className="App-header mt-5">
        <Card></Card>
      </MDBContainer>
    </div>
  );
}

export default App;
