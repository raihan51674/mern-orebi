import React from 'react';
import {logo} from '../assets/images/index';
import Container from './Container';


const Header = () => {
  return (
    <div>
      <Container>
        <img src={logo} alt="logo" />
        <h1>hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ullam perspiciatis recusandae tenetur earum dolorem cumque deleniti nostrum atque, porro rerum molestiae excepturi maiores reiciendis quae sit laudantium impedit unde.</p>

      </Container>
    </div>
  )
}

export default Header
