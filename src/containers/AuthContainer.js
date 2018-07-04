import React from "react";
import { connect } from "react-redux";
import * as actions from "../ducks/events-duck/Actions"; 
import * as selectors from "../ducks/events-duck/Selectors"
import Login from "../components/Login";
class AuthContainer extends React.Component {
  constructor(props) {
    super(props) ;
      this.state = {
        username: "",
        password: ""
      }
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
  eventsList: selectors.selectEventsList(state)
 });
 
 const mapDispatchToProps = {
  
  };

 export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

