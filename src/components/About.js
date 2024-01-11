import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/context.js";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.inter = setInterval(() => {
      console.log("setinterval is called");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.inter);
  }

  render() {
    return (
      <div>
        <h3>Hiii</h3>
        <h4>We are good</h4>
        <userContext.Consumer>
          {({ username }) => <h1>{username}</h1>}
        </userContext.Consumer>
        <UserClass name={"first"} location={"Bangalore (Class)"} />
      </div>
    );
  }
}

export default About;
