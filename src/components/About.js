import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.inter = setInterval(() => {
      console.log("setinterval is called");
    }, 100);
  }
  componentWillUnmount() {
    clearInterval(this.inter);
  }

  render() {
    return (
      <div>
        <h3>Hiii</h3>
        <h4>We are good</h4>
        <UserClass name={"first"} location={"Bangalore (Class)"} />
      </div>
    );
  }
}

export default About;
