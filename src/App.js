import React from 'react';

function Food({fav}){
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
  <div>
    <h1>hello</h1>
    <Food fav="kimchi" />
    <Food fav="11111" />
    <Food fav="22222" />
  </div>
  );
}

export default App;
