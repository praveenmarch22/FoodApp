import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor is called..");
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    console.log("Component did mount");
    const info = await fetch("https://api.github.com/users/praveenmarch22");
    const data = await info.json();
    this.setState({
      userInfo: data,
    });

    console.log(data);
  }
  componentDidUpdate() {
    console.log("component is updated");
  }

  componentWillUnmount() {
    console.log("component is unmounted");
  }

  render() {
    console.log("Component render...");
    return (
      <div className="user-card">
        <img src={this.state.userInfo.avatar_url} />
        <h3>Name:{this.state.userInfo.name}</h3>
        <h4>Location:{this.state.userInfo.location}</h4>
      </div>
    );
  }
}

export default UserClass;
