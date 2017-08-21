import React, { Component } from 'react';
import { Container } from '../../theme/grid'

class AboutMe extends Component {
   render() {
      return (
         <Container>
            <h1>About Me</h1>
            <p>
               Rafael Hernandez is currently a student at Oxnard Community College preparing to transfer to a four-year university to pursue a computer science degree. He is a data-driven and analytical-minded individual with a passion for technology, entrepreneurship, and innovation. His career interests are focused in the areas of software engineering and machine learning. Being a first-generation Hispanic student, he aspires to serve as a positive role model for the underrepresented youth in his community and help the future generations prosper. Rafael established and currently serves as president of the Society of Hispanic Professional Engineers (SHPE) student chapter at Oxnard College which is an organization for all students who are interested in STEM careers and want to establish networks that will further their educational and professional career. In addition, Rafael was part of the first cohort of the First Year Experience (FYE) program and now serves as a peer mentor making sure FYE students have a successful college transition.
            </p>
         </Container>
      );
   }
}

export default AboutMe;
