import React from 'react';
import './App.css';

import PropComp from './components/PropComp';

function App() {
  return (
    <div className="App">
      <PropComp firstName={" ,Jane"} lastName={"Doe"}/>
      <PropComp Age={"Age: 45"}/>
      <PropComp hairColor={"Hair Color: Black"}/>

      <PropComp firstName={" ,John"} lastName={"Smith"}/>
      <PropComp Age={"Age: 88"}/>
      <PropComp hairColor={"Hair Color: Brown"}/>

      <PropComp firstName={" ,Millard"} lastName={"Fillmore"}/>
      <PropComp Age={"Age: 50"}/>
      <PropComp hairColor={"Hair Color: Brown"}/>

      <PropComp firstName={" ,Maria"} lastName={"Smith"}/>
      <PropComp Age={"Age: 62"}/>
      <PropComp hairColor={"Hair Color: Brown"}/>
    </div>
  );
}

export default App;
