import React, { Component } from 'react';
import '../assets/styles/components/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <a href='/'>Terminos de uso</a>
        <a href='/'>Declaración de privacidad</a>
        <a href='/'>Centro de ayuda</a>
      </footer>
    );
  }
}

export default Footer;
