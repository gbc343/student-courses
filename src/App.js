import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './student';
import College from './college';

function App() {
  return (
    <React.Fragment>
      <Student name="Rick Rude" number="11111" enrolled="2"/>
      <Student name="Something Else" number="232323" enrolled="3"/>
      <Student name="Who Cares" number="1124234111" enrolled="1"/>
      <College name="Blau Bla" location="somewhere"/>
    </React.Fragment>
  );
}

export default App;
