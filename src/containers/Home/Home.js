import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { HomeImage } from './Home.styles';

class Home extends Component{
      render() {
      return (
         <Container>
            <HomeImage>
               <h1>Rafael Hernandez</h1>
            </HomeImage>
         </Container>
      );
   }
}

export default Home;
