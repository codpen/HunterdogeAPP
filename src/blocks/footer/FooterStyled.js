import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterMain = styled.div`
  position: relative;
  z-index: 1;
  height: 323px;
  max-width: 100vw;
  width: 100%;
  background-color: #775600;
  margin-top: 46px;
  padding: 59px 30px 64px 30px;
  
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 1600px) {
    padding: 59px 46px 64px 68px;
  }
`
export const Text = styled(Link)`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 21px;
  color: #FFFFFF;
  text-decoration: none;
  
  margin: ${({margin}) => margin || '25px 0 0 0'};
`

export const Title = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-size: ${({size}) => size || '30px'};
  line-height: ${({size}) => size || '30px'};
  margin-top: ${({mtop}) => mtop || '0'};
`

export const Button = styled.button`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #B78300;
  padding: 10px;
  width: 100%;
  margin-top: 27px;
  
  text-align: center;
  background: #FFDA01;
  border: 2px solid #B78300;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  
  &:hover {
    background: #d5b562;
  }
`

export const ImageWrapper = styled.div`
  margin-left: 20px;
  transform: translateY(60px);
  @media (min-width: 1600px) {
    margin-left: 40px;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  margin-top: 35px;
`