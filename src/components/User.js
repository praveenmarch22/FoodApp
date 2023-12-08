import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(3);

  return (
    <div className="user-card">
      <h1>count: {count}</h1>
      <h1>count: {count2}</h1>
      <h3>Name:{props.name}</h3>
      <h4>Location:{props.location}</h4>
    </div>
  );
};

export default User;
