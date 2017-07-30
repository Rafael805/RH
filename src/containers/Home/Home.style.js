import styled, {css} from 'styled-components';

export const RHImage = styled.div`
   width: 100%;
   height: 100vh;
   background-image: url('${require('../../assets/RH.jpg')}');
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

export const RevealP = styled.p`
   position: relative;
   &:after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;

      transition: 1s;
   }
   ${({ hide }) => hide && css`
      &:after {
         transform: rotateY(90deg);
      }
   `}
`;
