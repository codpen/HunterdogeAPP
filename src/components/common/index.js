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

export const ButtonGreen = styled.button`
  width: ${({width}) => width};
  height: ${({height}) => height || '36px'};
  border: none;
  cursor: pointer;
  background: green;
  border-radius: 25px;
  font-size: ${({size}) => size || '15px'};
  line-height: ${({size}) => size || '15px'};
  margin: ${({margin}) => margin || '0'};

  font-family: Raleway;
  font-style: normal;
  font-weight: ${({weight}) => weight || '600'};

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1);
  color: #FFFFFF;

  transition: 0.5s;

  &:hover {
    background-color: rgba(10, 193, 10, 0.7);
  }
`

export const ButtonYellow = styled.button`
  width: ${({width}) => width};
  height: ${({height}) => height || '36px'};
  border: none;
  cursor: pointer;
  background: yellow;
  border-radius: 25px;
  font-size: ${({size}) => size || '15px'};
  line-height: ${({size}) => size || '15px'};
  margin: ${({margin}) => margin || '0'};

  font-family: Raleway;
  font-style: normal;
  font-weight: ${({weight}) => weight || '600'};

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1);
  color: #000;

  transition: 0.5s;

  &:hover {
    background-color: #e5e544;
  }
`

export const ButtonRed = styled.button`
  width: ${({width}) => width};
  height: ${({height}) => height || '36px'};
  border: none;
  cursor: pointer;
  background: red;
  border-radius: 25px;
  font-size: ${({size}) => size || '15px'};
  line-height: ${({size}) => size || '15px'};
  margin: ${({margin}) => margin || '0'};

  font-family: Raleway;
  font-style: normal;
  font-weight: ${({weight}) => weight || '600'};
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1);
  color: #FFFFFF;

  transition: 0.5s;

  &:hover {
    background-color: #f83535;
  }
`

export const VoteWrapper = styled.div`
  margin: 0 20px;
  gap: 7px;
  display: flex;
  flex-direction: column;
`
export const More = styled.button`
  padding: 0 0 25px 0;
  width: 35px;
  height: 35px;
  border: none;
  cursor: pointer;
  background: #B78300;
  border-radius: 25px;
  font-size: 45px;
  line-height: 12px;
  font-weight: 500;
  font-family: Raleway;
  box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1);
  color: #FFFFFF;
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