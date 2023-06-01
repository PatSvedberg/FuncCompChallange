import React, { Component } from 'react';
import css from './css/NavBarSimple.module.css';

class NavBarSimple extends Component {
    constructor(props) {
      super(props);
      this.state = {
        message: 'Hello, guest!',
        buttonText: 'Login',
      };
    }
  
    handleClick = () => {
      this.setState((prevState) => ({
        message: prevState.message === 'Hello, guest!' ? 'Welcome back, user!' : 'Hello, guest!',
        buttonText: prevState.buttonText === 'Login' ? 'Logout' : 'Login',
      }), () => console.log(this.state.message));
    }
  
    render() {
      return (
        <div className={css.NavBar}>
          <h1>My Gallery Heading</h1>
          <span>{this.state.message}</span>
          <button onClick={this.handleClick}>{this.state.buttonText}</button>
        </div>
      );
    }
  }
  
  export default NavBarSimple;