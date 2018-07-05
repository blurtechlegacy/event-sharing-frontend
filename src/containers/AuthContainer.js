import React from "react";
import { connect } from "react-redux";
import * as actions from "../ducks/auth-duck/Actions"; 
import * as selectors from "../ducks/auth-duck/Selectors"
import Login from "../components/Login";
class AuthContainer extends React.Component {
  constructor(props) {
    super(props) ;
      this.state = {
        username: "",
        password: ""
      }
    }
  
    login = () => {
      this.props.loginSuccess(this.state.username);
    }
    handleChangeName = event => {
      this.setState({username: event.target.value});
      console.log(this.state.username);
      
    }

    handleChangePassword = event => {
      this.setState({password:event.target.value});  
    }
    
    handleSubmit = event => {
      event.preventDefault();
      console.log(this.state.username);
      console.log(this.state.password);
      this.login();
    }
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

 });
 
 const mapDispatchToProps = {
    loginSuccess:actions.loginSuccess
  };

 export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

