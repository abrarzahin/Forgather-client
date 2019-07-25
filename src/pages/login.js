import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/fgicon.png';


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = {
    form: {
        textAlign: 'center'
      },
      image: {
        margin: '20px auto 20px auto'
      },
      pageTitle: {
        margin: '10px auto 10px auto'
      }
 
  };
  

class login extends Component {

    constructor() {
        super();
        this.state = {
          email: '',
          password: '',
          loading: false,
          errors: {}
        };
      }
      handleSubmit = (event) => {
        console.log('submit works')
      };
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;
        return (
            <Grid container className={classes.form}>
            <Grid item sm />
            <Grid item sm>
              <img src={AppIcon} alt="social-media" className={classes.image} />
              <Typography variant="h2" className={classes.pageTitle}>
                Login
              </Typography>
              <form noValidate onSubmit={this.handleSubmit}>
              <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
             <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />


              </form>
              
            </Grid>
            <Grid item sm />
          </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(login);
