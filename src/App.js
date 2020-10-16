import React from 'react';

function Food({name}){  
  return (
  <h2> Food ! {name}</h2>
  )
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food name="kimchi"/>
      <Food name="aaa"/>
      <Food name="bbb"/>
    </div>
    
  );
}

export default App;
