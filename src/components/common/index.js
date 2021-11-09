import styled from "styled-components";

export const Button = styled.button`
  width: ${({width}) => width};
  height: ${({height}) => height || '36px'};
  border: none;
  cursor: pointer;
  background: #B78300;
  box-sizing: border-box;
  border-radius: 25px;
  font-size: ${({size}) => size || '15px'};
  line-height: ${({size}) => size || '15px'};
  margin: ${({margin}) => margin || '0'};

  font-family: Raleway;
  font-style: normal;
  font-weight: ${({weight}) => weight || '500'};

  text-align: center;
  text-transform: uppercase;
  box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1);
  color: #FFFFFF;
`