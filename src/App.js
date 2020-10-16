import React from 'react';

function Food({name}){  
  return (
  <h2> Food ! {name}</h2>
  )
}

const foodArray = [{name : "kimchi", id:1}, {name: "ramen", id:2}, {name:"kimbob", id:3}];

function App() {
  return (
    <div>      
      {foodArray.map( food => (
         <Food key={food.id} name={food.name}/>
      ))}
    </div>
    
  );
}

export default App;
