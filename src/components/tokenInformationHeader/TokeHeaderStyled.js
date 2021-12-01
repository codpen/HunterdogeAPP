import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1040px;
  height: 494px;
  padding: 14px 21px 21px 21px;
  margin-bottom: 32px;
  background: #FFF;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
`

export const BadgesWrapper = styled.div`
  width: 162px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  text-align: center;
`

export const InfoWrapper = styled.div`
  max-width: 820px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 0 27px 15px;
`

export const Inner = styled.div`
  width: 100%;
  height: 335px;
  background: #FFF8CC;
  padding: 20px 27px 33px 27px;
  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
  margin-top: auto;
`

export const HeadTitle = styled.h3`
  font-size: ${({size}) => size || 'inherit'};
  line-height: ${({size}) => size || 'inherit'};
  font-weight: ${({weight}) => weight || '400'};
  margin: ${({margin}) => margin || '0'};
`

export const BadgesNotification = styled.div`
  width: 462px;
  height: 97px;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  background: #FFF599;
  border: 3px solid #FAF0CB;
  font-family: Raleway;
  font-style: normal;
  font-size: 15px;

  p {
    font-weight: 800;
    line-height: 15px;
    color: #AB882E;
  }

  span {
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.05em;
    color: rgba(171, 136, 46, 0.7);
  }

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;

    border-right: 10px solid blue;
  }
`

export const Substrate = styled.div`
  display: flex;
  padding: ${({padding}) => padding || '12px 22px'};
  background: ${({bg}) => bg || '#FAF0CB'};
  color: ${({color}) => color || '#FFFFFF'};
  border-radius: 25px;
  margin: ${({margin}) => margin || '0'};
  box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1);
`

export const Label = styled.h4`
  width: 152px;
  height: 56px;
  padding-top: 6px;
  margin-left: 22px;

  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 44px;
  line-height: 98.1%;
  color: #B78300;

  background: #FFFFFF;
  border: 1.4px solid #B78300;
  border-radius: 18px;
  box-shadow: 3.6px 3.6px 0 rgba(0, 0, 0, 0.1);
`

export const Card = styled.div`
  font-family: Raleway;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 18.5px;
    line-height: 18px;
    text-transform: uppercase;
    color: #B78300;
    margin-bottom: 9px;
  }
`
export const CardInfo = styled.p`
    width: 176px;
    height: 42px;
    background: ${({color}) => color || '#FAF0CB'};
    border-radius: 25px;
    border: 2px solid rgba(183, 131, 0, 0.5);
    box-shadow: 1px 3px 0 rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({mt}) => mt || 'auto'};
    padding: 11px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    color: #B78300;

`

export const Text = styled.p`
  position: relative;
  font-family: Raleway;
  font-style: normal;
  font-weight: ${({weight}) => weight || '600'};
  font-size: ${({size}) => size || '18px'};
  line-height: ${({size}) => size || '18px'};
  margin: ${({margin}) => margin || '0'};
  text-transform: uppercase;
  color: ${({color}) => color || '#AB882E'};
  cursor: ${({cursor}) => cursor};
`
export const IcoWrapper = styled.div` 
  width: 72.13px;
  /* height: 72.13px; */
  height: ${({height}) => height || '72.13px'};
  /* border-radius: 50%; */
  display: flex;
  margin-top: ${({mt}) => mt || 0};
  margin-bottom: 22px;
`

export const WrapperBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 15px 0 0 0;
  padding: 0 25px;
  height: 112px;
    & svg:nth-child(odd) {
      margin-right: 20px;
      margin-bottom: 20px;
    }
`

export const SocialWrapper = styled.div`
  width: 209px;
  height: 30px;

  display: flex;
  justify-content: space-between;
`

export const LinkStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: rgba(171, 136, 46, 0.5);
  border-radius: 40.4097px;
  
    &[disabled] {
      cursor: not-allowed;
      background: #E7D4A4 !important;
    }

    &:hover {
      background-color: rgba(171, 136, 46, 0.8);
    }
`

export const Popup = styled.div`
  position: absolute;
  width: ${({width}) => width ? width : '462px' };
  height: ${({height}) => height ? height : '97px' };
  left: ${({left}) => left ? left : '170px' };
  top: -30px;
  padding: 17px 19px 17px 32px;
  background: #FFF599;
  border: 3px solid #FAF0CB;
  box-sizing: border-box;
  text-align: start;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  z-index: 3;
    &::before {
      content: ''; 
      position: absolute;
      top: 15px;
      left: -39px;
      border: 15px solid transparent;
      border-right: 25px solid #FFF599;
    }
`

export const TextPopup = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: ${({fw}) => fw ? fw : 800 };
  font-size: 15px;
  line-height: ${({lh}) => lh ? lh : '22px' };
  color: ${({color}) => color ? color : '#AB882E'};
  margin-bottom: ${({mb}) => mb ? mb : 0};
  text-transform: capitalize;
`