import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`
export const Block = styled.div`
  margin: ${({margin}) => margin};
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

export const Value = styled.p`
  margin-bottom: 26px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: ${({size}) => size || '19px'};
  line-height: ${({size}) => size || '19px'};
  color: #B78300;
`

export const BannerWrapper = styled.div`
  margin: ${({margin}) => margin || '34px 0 0 0'};
  min-width: 300px;
  max-width: 870px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`

export const Banner = styled.div`
  max-width: 622px;
  width: 100%;
  height: 342px;
  background: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;
  margin-bottom: 32px;

  h5 {
    width: 70%;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 39px;
    text-align: center;
    text-transform: uppercase;
    color: #FF0000;

    @media (min-width: 1920px) {
      font-size: 50px;
      line-height: 49px;
    }

    @media (max-width: 1600px) {
      width: 80%;
      font-size: 32px;
      line-height: 30px;
    }
  }
`

export const Text = styled.div`
  max-width: 622px;
  max-height: 180px;
  height: 100%;
  width: 100%;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #B78300;
  margin-right: 32px;

  @media (max-width: 1919px) {
    padding: 10px 10px 0 0;
    overflow-y: auto;
  }
`

export const ActionWrapper = styled.div`
  padding: 26px 24px 15px 24px;
  width: 222px;
  height: 342px;
  border: 1px solid #C4C4C4;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ActionTitle = styled.p`
  width: 171px;
  height: 71px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 19px;
  text-align: center;
  color: #B78300;
`

export const ActionGoal = styled.p`
  width: 55.71px;
  height: 52px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 26px;
  text-align: center;
  color: #EE7541;
  text-align: center;
  margin-bottom: 8px;
`

export const ActionButton = styled.button`
  width: 160px;
  height: 30px;
  background: #EE7541;
  border-radius: 5px;
  padding: 6px 40px;
  border: none;
  margin-bottom: 13px;
  cursor: pointer;

  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 17px;
  text-align: center;
  color: #FFFFFF;
`

export const SocialWrapper = styled.div`
  width: 160px;
  height: 28px;

  display: flex;
  justify-content: space-between;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 827px;
  margin-right: 16px;
  
  @media (min-width: 1600px) {
    margin-right: 61px;
  }

  @media (max-width: 1600px) {
    width: 60%;
  }
`

export const ParticipationWrapper = styled.div`
  min-width: 222px;
  text-align: center;

  button {
    padding: 8px 19px;
    border: none;
    background: #FFFBE2;
    border-radius: 11.0353px;
    box-shadow: 2.2px 2.2px 0 rgba(0, 0, 0, 0.1);
    font-family: Raleway;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    color: #B78300;

    span {
      font-size: 30px;
      line-height: 29px;
      text-align: center;
      color: #000000;
    }
  }
`

export const ParticipationButton = styled.button`
  width: 100%;
  padding: 8px 19px;
  border: none;
  background: #FFFBE2;
  border-radius: 11.0353px;
  box-shadow: 2.2px 2.2px 0 rgba(0, 0, 0, 0.1);
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: #B78300;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 30px;
    line-height: 29px;
    text-align: center;
    color: #000000;
    text-transform: capitalize;
  }
`

export const PerBnb = styled.span`
  font-style: normal;
  font-weight: 200;
  font-size: 13.57px;
  line-height: 13px;
  text-transform: none;
  color: #B78300;
`
export const LinkStyled = styled.a`
  display: block;
`