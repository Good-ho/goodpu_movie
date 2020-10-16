import React from "react";
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return <h2> Food ! {name} {rating}</h2>;
}

Food.propTypes = {
  name:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}

const foodArray = [
  { name: "kimchi", id: 1, rating:3 },
  { name: "ramen", id: 2, rating:2.9 },
  { name: "kimbob", id: 3, rating:4.5 },
];

function App() {
  return (
    <div>
      {foodArray.map((food) => (
        <Food key={food.id} name={food.name} rating={food.rating} />
      ))}
    </div>
  );
}

export default App;
