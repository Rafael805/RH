import styled from 'styled-components';

export const RHImage = styled.div`
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

   font-size: 2em;

   h1 {
      margin-bottom: 0;
   }
`;
