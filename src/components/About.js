import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          Logged In User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>About the User</h2>
        <UserClass user={"salonishaw11"} place={"Raniganj"} />
      </div>
    );
  }
}
export default About;
