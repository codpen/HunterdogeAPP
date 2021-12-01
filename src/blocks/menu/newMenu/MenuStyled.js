import styled from "styled-components";
import {Button, Image, Link_} from "../../../components/common";

export const Wrapp = styled.div`
  width: 100%;
  position: relative;
`

export const Wrapper = styled.div`
  position: sticky;
  top: 1em;
  width: 348px;
  min-width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAF0CB;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  padding: 62px 21px 21px 21px;
  text-align: center;
  flex-shrink: 0;
  z-index: 10;

  @media screen and (max-width: 1649px) {
    width: 220px;
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