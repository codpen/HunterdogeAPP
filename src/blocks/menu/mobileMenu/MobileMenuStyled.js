import styled from "styled-components";
import {Button, Image, Link_} from "../../../components/common";
import bg from "../../../images/mobile/bg_menu.png";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  z-index: 100;
  padding: 5px 13px 0 5px;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  color: #AB882E;
  margin-left: 5px;
`

export const WrappedLink = styled(Link_)`
  font-size: 16px;
  flex-shrink: 0;

  @media screen and (max-width: 1649px) {
    font-size: 15px;
    order: 2;
  }
`

// export const Flex = styled.div`
//   display: flex;
//   align-items: flex-end;
//   /* justify-content: center; */
// `

export const WrappedButton = styled(Button)`
  font-size: 17px;
  max-width: 270px;
  margin-top: 27px;
  height: 50px;
  cursor: pointer;

  @media screen and (max-width: 1700px) {
    font-size: 15px;
    height: 40px;
  }

  @media screen and (max-width: 1440px) {
    font-size: 14px;
  }
`