import styled from 'styled-components';
import bgImg from '../../media/3156482.jpg';

export const MatchingPlaceWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 4%;
  background: url(${bgImg}) no-repeat center fixed;
  :after {
    opacity: 0.5;
  }
`;
