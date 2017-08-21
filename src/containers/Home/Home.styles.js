import styled from 'styled-components';

export const HomeImage = styled.div`
   width: 100%;
   height: 100vh;
   background-image: url('${require('../../assets/comp.gif')}');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;

   display: flex;
   flex-direction: column;
   align-content: center;
   justify-content: center;

   text-align: center;
   color: white;

   h1 {
      font-size: 1.6em;
   }
`;
