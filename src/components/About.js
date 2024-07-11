import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>About the User</h2>
        <UserClass user={"salonishaw11"} place={"Raniganj"} />
      </div>
    );
  }
}
export default About;
