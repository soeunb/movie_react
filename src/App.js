import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: '1',
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RfQwbEL6Cv-2I-o4WB_j14V02cOyEoSKRT4-9Pz6AhBoRSYSUwVIbTKlLACf5uRi9tY&usqp=CAU',
    rating: 5,
  },
  {
    id: 2,
    name: '2',
    image : 'https://mblogthumb-phinf.pstatic.net/MjAxNzA1MDJfMTM1/MDAxNDkzNzE1MTcxMzgw.zCRTW6b8-u_VABe6in10JOz3JD8nX8xM7WYStDcyjD0g.76_1woCtIXR0VpYjPUOs2Su64Mg8nSkf_4sPjjtgsP8g.PNG.jinmichu/08.png?type=w800',
    rating: 4,
  },
  {
    id: 3,
    name: '3',
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtH_gSXa5LMZkYC7hag0Kkr0988PuNxa1VtF4K1LJOwuXjmf_LouOTfbhhvgkES6AQ4-s&usqp=CAU',
    rating: 3,
  },
];

function App() {
  return (
  <div>
    {foodLike.map(dish=> (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
    ))}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;