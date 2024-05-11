import {styled, keyframes} from 'styled-components';

export const ScrollContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  z-index:99;
  
`;



export const Section = styled.div`

  height: 100vh;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  background-color: #EEE7DB;

`;

export const Section3 = styled(Section)`
  scroll-snap-align: start;
`;