import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
container: {
display: 'flex',
flexDirection: 'column',
alignItems: "center",
flexWrap: 'wrap',
marginTop: '250px'
},
textField: {
marginLeft: theme.spacing.unit,
marginRight: theme.spacing.unit,
width: 200,
},
button0: {
background: 'linear-gradient(45deg, #FE6B8B 30%, #e5e531 80%)',
borderRadius: 3,
border: 0,
color: 'white',
height: 48,
padding: '0 10px',
boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
marginTop: '210px',
marginRight: '15px'
},
button1: {
background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
borderRadius: 3,
border: 0,
color: 'white',
height: 48,
padding: '0 10px',
boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
marginTop: '210px',
marginLeft: '15px'
}
});

const TextFieldMargins = props => {
const {classes} = props;

return (
<div className={classes.container}>
<TextField
label="Login"
id="margin-login"
className={classes.textField}
helperText=""
onChange={props.handleChangeName}
/>
<TextField
label="Password"
type='password'
id="margin-password"
className={classes.textField}
helperText="min.8 characters"
margin="dense"
onChange={props.handleChangePassword}
/>
<Button className={props.classes.button0}
onClick={props.handleSubmit}>
Sign in
</Button>
<Button className={props.classes.button1}>
Sign Up
</Button>

</div>
);
};

TextFieldMargins.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldMargins)