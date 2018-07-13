import React from "react";
import { connect } from "react-redux";
import * as actions from "../ducks/auth-duck/Actions";
import * as selectors from "../ducks/auth-duck/Selectors";
import Login from "../components/Login";
import { withRouter } from "react-router-dom";
class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginError: this.props.error
    };
  }
  componentDidMount() {
    this.props.fetchUsers();
  }

  login = () => {
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
    console.log("loginError", this.state.loginError);
    console.log("Error", this.props.error);
    return (
      <div>
        <Login
          username={this.state.username}
          password={this.state.password}
          handleChangeName={this.handleChangeName}
          handleChangePassword={this.handleChangePassword}
          handleSubmit={this.handleSubmit}
          isError={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: selectors.selectUsers(state),
  password: selectors.selectPassword(state),
  error: selectors.selectError(state)
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
