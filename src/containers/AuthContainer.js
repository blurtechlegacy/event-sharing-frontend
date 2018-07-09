import React from "react";
import { connect } from "react-redux";
import * as actions from "../ducks/auth-duck/Actions";
import * as selectors from "../ducks/auth-duck/Selectors";
import Login from "../components/Login";
class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  componentDidMount() {
    this.props.fetchUsers();
  }
  login = () => {
    // if (this.props.user.length != ) {
    //   this.props.loginSuccess(this.state.username, this.state.password);
    // }
    this.props.loginRequest(
      this.state.username,
      this.state.password,
      this.props.users
    );
  };
  handleChangeName = event => {
    this.setState({ username: event.target.value });
    this.state.username;
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.login();
  };

  render() {
    return (
      <Login
        username={this.state.username}
        password={this.state.password}
        handleChangeName={this.handleChangeName}
        handleChangePassword={this.handleChangePassword}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  users: selectors.selectUsers(state),
  password: selectors.selectPassword(state)
});

const mapDispatchToProps = {
  fetchUsers: actions.fetchUsersRequest,
  loginSuccess: actions.loginSuccess,
  loginRequest: actions.loginRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
