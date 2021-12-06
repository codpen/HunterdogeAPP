import styled from "styled-components";
import {Button, Image, Link_} from "../../../components/common";

export const Wrapp = styled.div`
  width: 100%;
  position: relative;
`

export const Wrapper = styled.div`
  position: sticky;
  top: 1em;
  width: 90%;
  height: auto;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAF0CB;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 40px 10px 10px 10px;
  text-align: center;
  flex-shrink: 0;
  z-index: 10;
  @media screen and (min-width: 600px) {
    width: 348px;
    padding: 62px 21px 21px 21px;
    height: 100%;
  }
`

export const ImageWrapper = styled(Image)`
  height: 200px;
  transform: translateX(10px);

  @media screen and (max-width: 1700px) {
    height: 150px;
  }
`

export const WrappedLink = styled(Link_)`
  font-size: 16px;
  flex-shrink: 0;

  @media screen and (max-width: 1649px) {
    font-size: 15px;
    order: 2;
  }
`

export const Flex = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 1650px) {
    flex-direction: column;
    align-items: center;
  }
`

export const WrappedButton = styled(Button)`
  font-size: 17px;
  max-width: 270px;
  margin-top: 20px;
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
export const CloseButton= styled(Button)`
  width: 24px;
  height: 24px;
  background: #B78300;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: -80px;
`

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`