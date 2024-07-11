import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }
  async componentDidMount() {
    const user = await fetch("https://api.github.com/users/" + this.props.user);
    const json = await user.json();
    this.setState({ userData: json });
    console.log(json);
  }
  render() {
    return (
      <div>
        <h1>{this.state?.userData?.name}</h1>
        <img alt="user" src={this.state?.userData?.avatar_url} />
      </div>
    );
  }
}
export default UserClass;
