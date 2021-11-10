import styled from "styled-components";

export const Button = styled.button`
  width: ${({width}) => width};
  height: ${({height}) => height || '36px'};
  border: none;
  cursor: pointer;
  background: ${({bg}) => bg || '#B78300'};
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
  color: ${({color}) => color || '#FFFFFF'};
  
  transition: 0.5s;
  
  &:hover {
    background-color: #d5b562
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: ${({justify}) => justify || 'space-between'};
  flex-direction: ${({direction}) => direction || 'row'};
  align-items: center;
  margin: ${({margin}) => margin || '0'};
  margin-left: ${({left}) => left ? 'auto' : '0'};
  max-width: ${({mwidth}) => mwidth};
`

export const Image = styled.img.attrs(props => ({
    src: props.src || Image,}))`
  width: ${({width}) => width};
  height: ${({height}) =>  height || '100%'};
  margin: ${({margin}) => margin || '0'};
`;