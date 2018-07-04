import React from "react";

const Login = props => {
    return (
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleChangeName} />
        <input type="password" onChange={props.handleChangePassword} />
        <button>LOG IN</button>
      </form>
    );
  };

  export default Login;