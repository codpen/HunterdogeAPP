import styled from "styled-components";

export const Flex = styled.p`
  display: flex;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 1420px;
  background: #FFFFFF;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 35px;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 827px;
  margin-right: 40px;
  
  @media (min-width: 1600px) {
    margin-right: 61px;
  }
  
  @media (max-width: 1600px) {
    width: 60%;
  }
`

export const RightContent = styled.div`
  width: 400px;
`

export const DescTextWrapper = styled.div`
  /* filter: blur(3px); */
  min-width: 300px;
  max-width: 827px;
  width: 100%;
  max-height: 600px;
  margin: 19px 0 38px 0;
  padding: 0 15px 15px 0;
  overflow-y: auto;
`

export const DescText = styled.p`
  font-family: Raleway;
  color: #B78300;
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  word-break: break-all;
  
  margin: ${({margin}) => margin || '12px 0 0 0'};
`

export const Title = styled.p`
    margin-bottom: 10px;
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 15.57px;
    line-height: 15px;
    text-transform: uppercase;
    color: #B78300;
`

export const Divider = styled.hr`
  border: none;
  width: 2px;
  height: 592px;
  background-color: #FAF0CB;
  margin-right: 29px;
  margin-top: 23px;
`

export const HeadTitle = styled.h4`
  font-family: Raleway;
  font-style: normal;
  font-weight: ${({weight}) => weight || '800'};
  font-size: ${({size}) => size || '21px'};
  line-height: 21px;
  text-transform: ${({text}) => text || 'uppercase'};
  text-align: center;
  color: #B78300;
`
export const HeadSubTitle = styled.h4`
  font-family: Raleway;
  font-style: normal;
  font-weight: ${({weight}) => weight || '800'};
  font-size: 12px;
  line-height: 15px;
  /* text-transform: ${({text}) => text || 'uppercase'}; */
  color: #B78300;
  font-style: italic;
`



export const Value = styled.p`
  margin-bottom: 26px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: 19px;
  line-height: 19px;
  text-transform: uppercase;
  color: #B78300;
`

export const Upcoming = styled.span`
  text-decoration: underline;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  text-transform: uppercase;
  margin-left: 21px;
`

